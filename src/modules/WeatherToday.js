import { getWeather } from '../api/weahter_api';
import { get } from '../utils/localStorage';
import { elementCreate } from '../utils/elementCreate';
import { changeTemperatures } from '../utils/changeTemperatures';
import { dictionary } from '../const/dictionary';

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
    newDate = date.toLocaleString(get('lang'), {
      weekday: 'short',
      day: 'numeric',
      month: 'long',
      timeZone: get('timezone'),
    })
    newDate = newDate.charAt(0).toUpperCase() + newDate.slice(1);
    if (get('lang') === 'ru') {
      document.querySelector('#current_date').innerHTML = `${dictionary.ru.current_date}: ${newDate}`
    } else {
      document.querySelector('#current_date').innerHTML = `${dictionary.en.current_date}: ${newDate}`
    }

    document.querySelector('.language').addEventListener('mousedown', function (event) {
      newDate = date.toLocaleString(get('lang'), {
        weekday: 'short',
        day: 'numeric',
        month: 'long'
      })
      newDate = newDate.charAt(0).toUpperCase() + newDate.slice(1);

      if (get('lang') === 'ru') {
        document.querySelector('#current_date').innerHTML = `${dictionary.ru.current_date}: ${newDate}`
      } else {
        document.querySelector('#current_date').innerHTML = `${dictionary.en.current_date}: ${newDate}`
      }
    })
  }

  getTime() {
    let date = new Date()
    let timezoneTime
//можно выбрать формат времени (AM/PM) через get('lang') вместо 'ru', 
//но будет задержка ререндера часов при смене формата
    timezoneTime = date.toLocaleString('ru', {
      timeZone: get('timezone'),
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    })

    if(get('lang') === 'en') {
      document.querySelector('#time').innerHTML = `${dictionary.en.time}: ${timezoneTime}`
    } else {
      document.querySelector('#time').innerHTML = `${dictionary.ru.time}: ${timezoneTime}`
    }

    document.querySelector('.language').addEventListener('mousedown', function () {
      if (get('lang') === 'ru') {
        document.querySelector('#time').innerHTML = `${dictionary.ru.time}: ${timezoneTime}`
      } else {
        document.querySelector('#time').innerHTML = `${dictionary.en.time}: ${timezoneTime}`
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