import { get, set } from '../utils/localStorage'
import { C, F } from '../const/temperatures'
import { RU, EN } from '../const/languages'
import { getImage } from '../api/images_api'
import { getGeolocation } from '../api/geolocation_api'
import { changeLanguages } from '../utils/changeLanguages'
import { refreshBackground } from '../utils/refreshBackground'
import { GeolocationData } from './GeolocationData'


export class EventListeners {
  constructor() {

  }

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
    //при загрузке страницы //добавить в localStorage
    // window.onload = () => imagesApi.getImage().then(({urls}) => refreshBackground(`${urls.full}`))

    //по клику на кнопку
    document.querySelector('.image').addEventListener('click', function(event) {
      getImage().then(({urls}) => {
        set('image', `${urls.full}`)
        refreshBackground(get('image'))
      })
    })


    //получение геолокации
    window.onload = () => {
      // debugger
      getGeolocation().then((key) => { //передавать сразу в класс
        let location = key.loc.split(',')
        let geoData = new GeolocationData(location)
      })
    }
  }

  isListenersOn() {
    this.listeners()
  }
}