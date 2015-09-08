import {
  format as formatUrlObj,
} from "url";

export default function makeUrl (urlObj) {
  return formatUrlObj({
    protocol: urlObj.protocol,
    hostname: urlObj.hostname,
    port: urlObj.port,
    pathname: urlObj.pathname,
    query: urlObj.query,
  });
}
