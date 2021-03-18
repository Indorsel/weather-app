import { ControlBlock } from "./ControlBlock";
import { WeatherLayout } from "./WeatherLayout";
import { EventListeners } from "./EventListeners";
import { GeolocationData } from "./GeolocationData";
import { set } from '../utils/localStorage'
import { EN } from '../const/languages'
import { C } from '../const/temperatures'


export class Main {
  defaultSettings() {
    set('lang', EN)
    set('temperature', C)
  }
  
  render() {
    this.defaultSettings()

    let controlBlock = new ControlBlock()
    controlBlock.render()

    let weatherBlock = new WeatherLayout()
    weatherBlock.render()

    const eventListeners = new EventListeners()
    eventListeners.isListenersOn()  
  }
}