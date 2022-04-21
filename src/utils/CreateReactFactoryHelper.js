export function createFactory(type) {
  React.createElement.bind(null, type)
}
