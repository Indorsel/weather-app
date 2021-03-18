export function set(name, value) {
  window.localStorage.setItem(name, JSON.stringify(value)) //stringify объект в json строку преобразует
}

export function get(name, outValue = null) {
  return  JSON.parse(window.localStorage.getItem(name) || outValue) //parse обратно из json строки в объект
}

export function clearStorage(name) {
    localStorage.removeItem(name)
}