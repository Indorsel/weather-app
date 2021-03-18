import { elementCreate } from '../utils/elementCreate'
import { get } from '../utils/localStorage';

export class WeatherToday {
  constructor() {}

  createWrapper() {
    let layoutElem = elementCreate('div', 'weather_today')
    let layout = document.querySelector('.weather_layout')
    layout.append(layoutElem)
  }

  getDate() {
    let date =  new Date()
    let newDate = `${date.getDay() + 14}.${date.getMonth() + 1}.${date.getFullYear()}`
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

  createElementsInBlock() {
    let layoutElem = document.querySelector('.weather_today')
    layoutElem.innerHTML = `
      <p>Город, страна</p>
      <p>Текущая дата: ${this.getDate()}</p>
      <p id='time'></p> 
      <p>Температура сейчас: NUM°${get('temperature')}</p>
      <p>Описание погоды, ощущаемая температура 28C,</br>скорость ветра 5м/с, влажность 90%</p>
      <img>
    `
  }

  render() {
    this.createWrapper()
    this.createElementsInBlock()
    this.getCurrentTime()
  }
}