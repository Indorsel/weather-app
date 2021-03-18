import { elementCreate } from '../utils/elementCreate'


export class WeatherLayout {
  generateLayout() {
    let layout = elementCreate('div','weather_layout')
    document.body.append(layout)
  }
  
  render() {
    this.generateLayout()
  }
}