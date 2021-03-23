import { elementCreate } from '../utils/elementCreate'
import { get } from '../utils/localStorage';


export class ControlBlock {
  constructor() {}

  createButton(name) {
    let button = document.createElement('button')
    button.classList.add(name)
    if (name === 'language') {
      button.innerText = 'En / Ru'
    } 
    if (name === 'temperature') {
      button.innerText = '°C / °F'
    }
    if (name === 'image') {
      button.innerText = 'Refresh background'
    }
    return button
  }

  createInputSearch() {
    return elementCreate('input', 'search')
  }

  createControlBlock() {
    let bodyElem = elementCreate('div', 'control_block')
    document.body.append(bodyElem)
    bodyElem.append(this.createInputSearch())
    document.querySelector('.search').placeholder = `Press 'Enter' for search`
    bodyElem.append(this.createButton('language'))
    bodyElem.append(this.createButton('temperature'))
    bodyElem.append(this.createButton('image'))
  }

  render() {
    this.createControlBlock()
  }
}