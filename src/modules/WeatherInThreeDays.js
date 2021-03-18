import { elementCreate } from '../utils/elementCreate'
import { get } from '../utils/localStorage';


export class WeatherInThreeDays {
  constructor() {}

  createWrapper() {
    let layoutElem = elementCreate('div', 'weather_in_three_days')
    let layout = document.querySelector('.weather_layout')
    layout.append(layoutElem)
  }

  createElementsInBlock() {
    let layoutElem = document.querySelector('.weather_in_three_days')
    layoutElem.innerHTML = `
      <div>
        <p>День недели:</br>Сб, 26 октября</p>
        <p>Средняя температура днём:</br>
        NUM°${get('temperature')}</p>
      </div>
      <div>
        <p>День недели:</br>Сб, 26 октября</p>
        <p>Средняя температура днём:</br>
        NUM°${get('temperature')}</p>
      </div>
      <div>
        <p>День недели:</br>Сб, 26 октября</p>
        <p>Средняя температура днём:</br>
        NUM°${get('temperature')}</p>
      </div>
      <img>
    `
  }

  render() {
    this.createWrapper()
    this.createElementsInBlock()
  }
}