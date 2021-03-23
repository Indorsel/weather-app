import { get } from '../utils/localStorage';
import { paragraphs } from '../const/paragraphs';

export const forecastForThreeDays = (key) => {
  let arr = [0, 1, 2]
  let days = ['one', 'two', 'three']

  if(get('temperature') === 'C') {
    arr.forEach(el => {
      let newDate = key.forecast.forecastday[el].date.split('-').reverse().join('.')
      let icon = 'http:' + key.forecast.forecastday[el].day.condition.icon

      if (get('lang') === 'ru') {
        document.querySelector(`#day_${days[el]}`).innerHTML = `
          <p>${newDate}</p> 
          <p>${paragraphs.ru.three_days_temperature}${key.forecast.forecastday[el].day.avgtemp_c.toFixed(1)}°${get('temperature')}</p> 
          <p><img src='${icon}'></p> 
        `
      } else {
        document.querySelector(`#day_${days[el]}`).innerHTML = `
          <p>${newDate}</p> 
          <p>${paragraphs.en.three_days_temperature}${key.forecast.forecastday[el].day.avgtemp_c.toFixed(1)}°${get('temperature')}</p> 
          <p><img src='${icon}'></p> 
        `
      }
    })
  } else {
    arr.forEach(el => {
      let newDate = key.forecast.forecastday[el].date.split('-').reverse().join('.')
      let icon = 'http:' + key.forecast.forecastday[el].day.condition.icon

      if (get('lang') === 'ru') {
        document.querySelector(`#day_${days[el]}`).innerHTML = `
          <p>${newDate}</p> 
          <p>${paragraphs.ru.three_days_temperature}${((key.forecast.forecastday[el].day.avgtemp_c * 9 / 5) + 32).toFixed(1)}°${get('temperature')}</p> 
          <p><img src='${icon}'></p> 
        `
      } else {
        document.querySelector(`#day_${days[el]}`).innerHTML = `
          <p>${newDate}</p> 
          <p>${paragraphs.en.three_days_temperature}${((key.forecast.forecastday[el].day.avgtemp_c * 9 / 5) + 32).toFixed(1)}°${get('temperature')}</p> 
          <p><img src='${icon}'></p> 
        `
      }
    })
  }  
}