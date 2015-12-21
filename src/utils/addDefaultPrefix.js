export default function addDefaultPrefix(name) {
  return `default${ name[0].toUpperCase() + name.slice(1) }`;
}
