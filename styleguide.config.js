const _ = require("lodash")
const path = require("path")

module.exports = {
  showUsage: true,
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, ".jsx")
    const dirname = path.basename(path.dirname(componentPath))
    if (dirname === "components") {
      return `import { ${name} } from "react-google-maps";`
    }
    return `import ${name} from "react-google-maps/lib/components/${dirname}/${name}";`
  },
}
