import { get } from '../utils/localStorage';

export const forecastForThreeDays = (key) => {
  // debugger
  let arr = [0, 1, 2]
  let days = ['one', 'two', 'three']
  arr.forEach(el => {
    let newDate = key.forecast.forecastday[el].date.split('-').reverse().join('.')
    let icon = 'http:' + key.forecast.forecastday[el].day.condition.icon
    document.querySelector(`#day_${days[el]}`).innerHTML = `
      <p>${newDate}</p> 
      <p>Средняя температура днём: ${key.forecast.forecastday[el].day.avgtemp_c}°${get('temperature')}</p> 
      <p><img src='${icon}'></p> 
    `
  })
}