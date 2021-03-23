import { getWeather } from '../api/weahter_api';
import { C, F } from '../const/temperatures';
import { get, set } from '../utils/localStorage';
import { elementCreate } from '../utils/elementCreate'
import { changeTemperatures } from '../utils/changeTemperatures';
import { WeatherInThreeDays } from './WeatherInThreeDays';

export class WeatherToday {
  constructor(location) {
    this.location = location
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

  getTemperature() {
    document.querySelector('#geolocation').innerHTML = `Температура сейчас: ${this.getOneDayWeather()}°${get('temperature')}`
  }


  getOneDayWeather() { 
    this.location.city === undefined ? this.location.city = this.location.location.name : this.location.city
    this.location.loc === undefined ? this.location.loc = this.location.location.lat + ',' + this.location.location.lon : this.location.loc
    getWeather(this.location.loc, 1).then((key) => {
      changeTemperatures(key)
      
      document.querySelector('.temperature').addEventListener('mousedown', function (event) {
        changeTemperatures(key)
      })
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
    this.getOneDayWeather()
  }

  render() {
    this.init()
  }
}