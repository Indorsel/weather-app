import { WeatherToday } from "./WeatherToday";
import { WeatherInThreeDays } from "./WeatherInThreeDays";
import { elementCreate } from '../utils/elementCreate'


export class WeatherLayout {
  generateLayout() {
    let layout = elementCreate('div','weather_layout')
    document.body.append(layout)
  }

  generateWeatherBlocks() {
    const weatherToday = new WeatherToday()
    weatherToday.render()

    const weatherInThreeDays = new WeatherInThreeDays()
    weatherInThreeDays.render()
  }
  
  render() {
    this.generateLayout()
    this.generateWeatherBlocks()
  }
}