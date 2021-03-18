export const elementCreate = (tag, name) => {
  let element = document.createElement(tag)
  element.classList.add(name)
  return element
}