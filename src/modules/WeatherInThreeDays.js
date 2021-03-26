import { elementCreate } from '../utils/elementCreate'
import { getWeather } from '../api/weahter_api';
import { forecastForThreeDays } from '../utils/forecastForThreeDays';
import { EN, RU} from '../const/languages'



export class WeatherInThreeDays {
  constructor(location, template, lang = EN) {
    this.location = location,
    this.template = template,
    this.lang = lang
  }

  createWrapper() {
    let layoutElem = elementCreate('div', 'weather_in_three_days')
    let layout = document.querySelector('.weather_layout')
    layout.append(layoutElem)
  }

  getForecast() {
    this.location.loc === undefined ? this.location.loc = this.location.location.lat + ',' + this.location.location.lon : this.location.loc
    getWeather(this.location.loc, 3).then((key) => {
      forecastForThreeDays(key)

      document.querySelector('.temperature').addEventListener('mousedown', function (event) {
        forecastForThreeDays(key)
      })

      document.querySelector('.language').addEventListener('mousedown', function (event) {
        forecastForThreeDays(key)
      })
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