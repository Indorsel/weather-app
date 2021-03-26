import { ControlBlock } from "./ControlBlock";
import { WeatherLayout } from "./WeatherLayout";
import { EventListeners } from "./EventListeners";
import { set } from '../utils/localStorage'
import { EN, RU } from '../const/languages'
import { C } from '../const/temperatures'


export class Main {
  constructor(template, lang = EN) {
    this.template = template,
    this.lang = lang
  }

  defaultSettings() {
    set('lang', EN)
    set('temperature', C)
  }
  
  createPage() {
    this.defaultSettings()

    let controlBlock = new ControlBlock(template, lang)
    controlBlock.render()

    let weatherBlock = new WeatherLayout(template, lang)
    weatherBlock.render()

    const eventListeners = new EventListeners()
    eventListeners.isListenersOn()  
  }

  render() {
    this.createPage()
  }
}