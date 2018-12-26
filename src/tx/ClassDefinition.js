import { parse } from "url"
import toMarkdown from "to-markdown"
import makeFetchHappen from "make-fetch-happen"
import cheerio from "cheerio"
const fetch = makeFetchHappen.defaults({
  cacheManager: ".cache/", // path where cache will be written (and read)
})

const KlassName = process.argv[2]

fetch(
  "https://developers.google.com/maps/documentation/javascript/3.exp/reference"
)
  .then(it => it.text())
  .then(it => cheerio.load(it))
  .then($ => {
    const href = $(`#${KlassName} a`).attr("href")
    return fetch(href)
  })
  .then(it => it.text())
  .then(it => cheerio.load(it))
  .then($ => {
    const $content = $(`#${KlassName}`).parent()
    return contentToJS(KlassName, $, $content)
  })
  .then(it => process.stdout.write(JSON.stringify(it)))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })

function contentToJS(KlassName, $, $content) {
  const constructor = $content
    .find(`#${KlassName}`)
    .next()
    .find("code")
    .text()

  const $constructorTable = $content.find(
    `[summary="class ${KlassName} - Constructor"]`
  )
  const constructorArgs = $constructorTable
    .find(`tbody .desc li code:first-child`)
    .text()
  const $methodsTable = $content.find(
    `[summary="class ${KlassName} - Methods"]`
  )
  const methods = $methodsTable
    .find("tbody > tr")
    .map((i, tr) => {
      const $tr = $(tr)
      const name = $tr.find('[itemprop="property"]').text()
      const args = $tr.find('.desc:contains("Parameters") li').text()
      const returns = $tr.find('.desc:contains("Return Value") code').text()
      const returnsDesc = toMarkdown($tr.find(".desc:last-child").html())

      return {
        name,
        args,
        returns,
        returnsDesc,
      }
    })
    .get()

  const $eventsTable = $content.find(`[summary="class ${KlassName} - Events"]`)
  const events = $eventsTable
    .find("tbody > tr")
    .map((i, tr) => {
      const $tr = $(tr)
      const name = $tr.find("td:first-child").text()

      return {
        name,
        args: $tr.find("td:nth-child(2) > div > code").text(),
        returnsDesc: $tr.find("td:nth-child(2) > div.desc").text(),
      }
    })
    .get()

  return {
    constructor: {
      name: constructor,
      args: constructorArgs,
    },
    methods,
    events,
  }
}
