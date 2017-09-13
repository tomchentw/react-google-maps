import warning from "warning"

warning(
  false,
  `[DEPRECATED] "react-google-maps/lib/async/withScriptjs" has been moved to "react-google-maps/lib/withScriptjs". You can also import { withScriptjs } from "react-google-maps" now.`
)

export { default } from "../withScriptjs"
