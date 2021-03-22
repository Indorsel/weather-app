import { get, set } from '../utils/localStorage'
import { C, F } from '../const/temperatures'
import { RU, EN } from '../const/languages'
import { getImage } from '../api/images_api'
import { getGeolocation } from '../api/geolocation_api'
import { changeLanguages } from '../utils/changeLanguages'
import { refreshBackground } from '../utils/refreshBackground'
import { GeolocationData } from './GeolocationData'
import { WeatherToday } from './WeatherToday'
import { WeatherInThreeDays } from './WeatherInThreeDays'


export class EventListeners {
  constructor() {}

  async listeners() {
    // смена языка
    document.querySelector('.language').addEventListener('mousedown', function (event) {
      get('lang') === EN ? set('lang', RU) : set('lang', EN)
      changeLanguages(get('lang'))
    })

    //смена единицы измерения температуры
    document.querySelector('.temperature').addEventListener('mousedown', function (event) {
      get('temperature') === C ? set('temperature', F) : set('temperature', C)
    })

    //строка поиска
    document.querySelector('.search').oninput = function () {
      console.log(`1`)
      // let value = this.value.trim()
      // if (value !== '') {

    }


    //смена фона
    //по клику на кнопку
    document.querySelector('.image').addEventListener('click', function(event) {
      getImage().then(({urls}) => refreshBackground(`${urls.full}`))
    })


    //получение геолокации
    window.onload = () => {
      getGeolocation().then((key) => {
        let location = key.loc.split(',')
        console.log(location)
        
        let geoData = new GeolocationData(location)
        geoData.render()

        let weatherToday = new WeatherToday(key)
        weatherToday.render()

        let weatherInThreeDays = new WeatherInThreeDays(key)
        weatherInThreeDays.render()
        
        //смена фона при загрузке
        // getImage().then(({urls}) => refreshBackground(`${urls.full}`))
      })
    }
  }

  isListenersOn() {
    this.listeners()
  }
}