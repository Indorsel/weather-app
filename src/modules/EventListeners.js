// import { C, F } from '../const/temperatures'
// import { changeTemperatures } from '../utils/changeTemperatures'
import { RU, EN } from '../const/languages'
import { getImage } from '../api/images_api'
import { WeatherToday } from './WeatherToday'
import { GeolocationData } from './GeolocationData'
import { WeatherInThreeDays } from './WeatherInThreeDays'
import { getWeather } from '../api/weahter_api';
import { getGeolocation } from '../api/geolocation_api'
import { getGeocodingData } from '../api/geocoding_api';
import { get, set } from '../utils/localStorage'
import { changeLanguages } from '../utils/changeLanguages'
import { refreshBackground } from '../utils/refreshBackground'


export class EventListeners {
  constructor() {}

  async listeners() {
    
    //получение геолокации
    window.onload = () => {
      getGeolocation().then((key) => {
        let location = key.loc.split(',')
        
        let geoData = new GeolocationData(location)
        geoData.render()

        let weatherToday = new WeatherToday(key)
        weatherToday.render()

        let weatherInThreeDays = new WeatherInThreeDays(key)
        weatherInThreeDays.render()
        
        //смена фона при загрузке
        getImage().then(({urls}) => refreshBackground(`${urls.full}`))
      })
    }

    //смена языка
    document.querySelector('.language').addEventListener('mousedown', function (event) {
      get('lang') === EN ? set('lang', RU) : set('lang', EN)
      changeLanguages(get('lang'))
    })

    //смена единицы измерения температуры
    document.querySelector('.temperature').addEventListener('mousedown', function (event) {
      get('temperature') === 'C' ? set('temperature', 'F') : set('temperature', 'C')
    })

    //строка поиска
    document.querySelector('.search').addEventListener('keydown', function(event) {
      //проверка на пустую строку
      if (!this.value) {
        return
      }
      if(event.keyCode === 13) {
        //получение координат введённого города
        getGeocodingData(this.value).then((response) => {
          let coordinates = response.results[0].geometry
          //получение погоды для введённого города
          getWeather(coordinates, 1).then(key => {
            let weatherToday = new WeatherToday(key)
            weatherToday.getOneDayWeather()
    
            let weatherInThreeDays = new WeatherInThreeDays(key)
            weatherInThreeDays.getForecast()

            let geoData = new GeolocationData(key.loc)
            geoData.render()
          })
          //отлов ошибки сервера, если нет погоды по этим координатам
          .catch(() => get('lang') === RU ? alert('Введите правильное название города') : alert('Enter the correct city name'))
        })
        //отлов ошибки сервера, если нет данных по этим координатам
        .catch(() => get('lang') === RU ? alert('Введите правильное название города') : alert('Enter the correct city name'))
      }
    })
    

    //смена фона
    //по клику на кнопку
    document.querySelector('.image').addEventListener('click', function(event) {
      getImage().then(({urls}) => refreshBackground(`${urls.full}`))
    })    
  }

  isListenersOn() {
    this.listeners()
  }
}