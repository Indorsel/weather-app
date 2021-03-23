import { getWeather } from '../api/weahter_api';
import { get } from '../utils/localStorage';
import { elementCreate } from '../utils/elementCreate';
import { changeTemperatures } from '../utils/changeTemperatures';
import { paragraphs } from '../const/paragraphs';

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
    let newDate
    if (get('lang') === 'ru') {
      newDate = date.toLocaleString('ru', {
        weekday: 'short',
        day: 'numeric',
        month: 'long'
      })
      newDate = newDate.charAt(0).toUpperCase() + newDate.slice(1);
    } else {
      newDate = date.toLocaleString('en', {
        weekday: 'short',
        day: 'numeric',
        month: 'long'
      })
      newDate = newDate.charAt(0).toUpperCase() + newDate.slice(1);
      document.querySelector('#current_date').innerHTML = `${paragraphs.en.current_date}${newDate}`
    }

    document.querySelector('.language').addEventListener('mousedown', function (event) {
      if (get('lang') === 'ru') {
        newDate = date.toLocaleString('ru', {
          weekday: 'short',
          day: 'numeric',
          month: 'long'
        })
        newDate = newDate.charAt(0).toUpperCase() + newDate.slice(1);
        document.querySelector('#current_date').innerHTML = `${paragraphs.ru.current_date}${newDate}`
      } else {
        newDate = date.toLocaleString('en', {
          weekday: 'short',
          day: 'numeric',
          month: 'long'
        })
        newDate = newDate.charAt(0).toUpperCase() + newDate.slice(1);
        document.querySelector('#current_date').innerHTML = `${paragraphs.en.current_date}${newDate}`
      }
    })
  }

  getTime() {
    let date = new Date()
    if (get('lang') === 'en') {
      document.querySelector('#time').innerHTML = `${paragraphs.en.time} ${date.getHours() + 1}:${date.getMinutes()}:${date.getSeconds()}`
    } 

    document.querySelector('.language').addEventListener('mousedown', function (event) {
      if (get('lang') === 'ru') {
        document.querySelector('#time').innerHTML = `${paragraphs.ru.time} ${date.getHours() + 1}:${date.getMinutes()}:${date.getSeconds()}`
      } else {
        document.querySelector('#time').innerHTML = `${paragraphs.en.time} ${date.getHours() + 1}:${date.getMinutes()}:${date.getSeconds()}`
      }
    })

  }

  getCurrentTime() {
    this.getTime()
    setInterval(this.getTime, 1000)
  }


  getOneDayWeather() { 
    this.location.city === undefined ? this.location.city = this.location.location.name : this.location.city
    this.location.loc === undefined ? this.location.loc = this.location.location.lat + ',' + this.location.location.lon : this.location.loc
    getWeather(this.location.loc, 1).then((key) => {
      changeTemperatures(key)
      
      document.querySelector('.temperature').addEventListener('mousedown', function (event) {
        changeTemperatures(key)
      })
      document.querySelector('.language').addEventListener('mousedown', function (event) {
        changeTemperatures(key)
      })
    })
  }
  createElementsInBlock() {
    let layoutElem = document.querySelector('.weather_today')
    layoutElem.innerHTML = `
      <p id='geolocation'></p>
      <p id='current_date'></p>
      <p id='time'></p> 
      <p id='temperature'></p>
      <p id='one_day_weather'></p>
      <p id='icon_one_day'></p>
    `
  }

  init() {
    this.createWrapper()
    this.createElementsInBlock()
    this.getDate()
    this.getCurrentTime()
    this.getOneDayWeather()
  }

  render() {
    this.init()
  }
}