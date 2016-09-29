import _ from "lodash";

import {
  format as formatUrlObj,
} from "url";

import {
  PropTypes,
} from "react";

export default function makeUrl(urlObj) {
  return formatUrlObj({
    protocol: urlObj.protocol,
    hostname: urlObj.hostname,
    port: urlObj.port,
    pathname: urlObj.pathname,
    query: urlObj.query,
  });
}

export const urlObjDefinition = {
  // PropTypes for URL generation
  // https://nodejs.org/api/url.html#url_url_format_urlobj
  protocol: PropTypes.string,
  hostname: PropTypes.string.isRequired,
  port: PropTypes.number,
  pathname: PropTypes.string.isRequired,
  query: PropTypes.object.isRequired,
};

export function getUrlObjChangedKeys(urlObj, nextUrlObj) {
  return Object.keys(urlObjDefinition)
    .filter(key => !_.isEqual(urlObj[key], nextUrlObj[key]));
}
