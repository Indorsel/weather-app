import { elementCreate } from '../utils/elementCreate'
import { getWeather } from '../api/weahter_api';
import { forecastForThreeDays } from '../utils/forecastForThreeDays';


export class WeatherInThreeDays {
  constructor(location, temperature) {
    this.location = location
    this.temperature = temperature
  }

  createWrapper() {
    let layoutElem = elementCreate('div', 'weather_in_three_days')
    let layout = document.querySelector('.weather_layout')
    layout.append(layoutElem)
  }

  getForecast() {
    getWeather(this.location.city, 3).then((key) => {
      forecastForThreeDays(key)
    })
  }


  createElementsInBlock() {
    let layoutElem = document.querySelector('.weather_in_three_days')
    layoutElem.innerHTML = `
      <div id='day_one'></div>
      <div id='day_two'></div>
      <div id='day_three'></div>
    `
  }

  render() {
    this.createWrapper()
    this.createElementsInBlock()
    this.getForecast()
  }
}