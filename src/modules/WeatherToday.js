import { get } from '../utils/localStorage';
import { elementCreate } from '../utils/elementCreate'
import { getWeather } from '../api/weahter_api';

export class WeatherToday {
  constructor(location, temperature) {
    this.location = location
    this.temperature = temperature
  }

  createWrapper() {
    let layoutElem = elementCreate('div', 'weather_today')
    let layout = document.querySelector('.weather_layout')
    layout.append(layoutElem)
  }

  getDate() {
    let date =  new Date()
    let newDate = date.toLocaleString('ru', {
      weekday: 'short',
      day: 'numeric',
      month: 'long'
    })
    newDate = newDate.charAt(0).toUpperCase() + newDate.slice(1);
    return newDate
  }

  getTime() {
    let date = new Date()
    document.querySelector('#time').innerHTML = `Время: ${date.getHours() + 1}:${date.getMinutes()}:${date.getSeconds()}`
  }

  getCurrentTime() {
    this.getTime()
    setInterval(this.getTime, 1000)
  }

  getLocation() {
  }

  getTemperature() {
    document.querySelector('#geolocation').innerHTML = `Температура сейчас: ${this.getOneDayWeather()}°${get('temperature')}`
  }

  getOneDayWeather() { 
    getWeather(this.location.city, 1).then((key) => {
      console.log(key)
      document.getElementById('geolocation').innerHTML = `${key.location.name}, ${key.location.country}`

      let icon = 'http:' + key.current.condition.icon
      document.getElementById('icon_one_day').innerHTML =`<img src='${icon}'>`

      document.getElementById('temperature').innerHTML = `Температура сейчас: ${key.current.temp_c}
      °${get('temperature')}`

      document.getElementById('one_day_weather').innerHTML = `На улице ${key.current.condition.text}, 
      ощущаемая температура ${key.current.feelslike_c}°${get('temperature')},</br>
      скорость ветра ${((key.current.wind_kph * 1) / 3.6).toFixed(1)}м/с, влажность ${key.current.humidity}%`
    })
  }
  createElementsInBlock() {
    let layoutElem = document.querySelector('.weather_today')
    layoutElem.innerHTML = `
      <p id='geolocation'></p>
      <p>Текущая дата: ${this.getDate()}</p>
      <p id='time'></p> 
      <p id='temperature'></p>
      <p id='one_day_weather'></p>
      <p id='icon_one_day'></p>
    `
  }

  init() {
    this.createWrapper()
    this.createElementsInBlock()
    this.getCurrentTime()
    this.getLocation()
    this.getOneDayWeather()
  }

  render() {
    this.init()
  }
}