const _ = require("lodash")
const path = require("path")

module.exports = {
  showUsage: true,
  showCode: true,
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, ".jsx")
    const dirname = path.basename(path.dirname(componentPath))
    if (dirname === "components") {
      return `import { ${name} } from "react-google-maps";`
    }
    return `import ${name} from "react-google-maps/lib/components/${dirname}/${name}";`
  },
  styles: {
    Playground: {
      preview: {
        height: 400 + 2 * 16 + 2 * 1,
      },
    },
  },
  sections: [
    {
      name: "Introduction",
      content: "src/docs/introduction.md",
    },
    {
      name: "Documentation",
      sections: [
        {
          name: "Installation",
          content: "src/docs/installation.md",
        },
        {
          name: "Usage & Configuration",
          content: "src/docs/configuration.md",
        },
      ],
    },
    {
      name: "HOCs",
      sections: [
        {
          name: "withGoogleMap",
          content: "src/withGoogleMap.md",
        },
        {
          name: "withScriptjs",
          content: "src/withScriptjs.md",
        },
      ],
    },
    {
      name: "UI Components",
      components: "src/components/**/*.jsx",
    },
  ],
}
