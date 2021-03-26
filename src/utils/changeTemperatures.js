import { get } from './localStorage';
import { paragraphs } from '../const/paragraphs';


export const changeTemperatures = (key) => {
  document.getElementById('geolocation').innerHTML = `${key.location.name}, ${key.location.country}`

  let icon = 'http:' + key.current.condition.icon
  document.getElementById('icon_one_day').innerHTML =`<img src='${icon}'>`


  if (get('temperature') === 'C') {
    if(get('lang') === 'en') {
      document.getElementById('temperature').innerHTML = `${paragraphs.en.temperature}: ${key.current.temp_c}°${get('temperature')}`

      document.getElementById('one_day_weather').innerHTML = `${paragraphs.en.one_day_weather_outside}
      ${key.current.condition.text.charAt(0).toLowerCase() + key.current.condition.text.slice(1)}
      ${paragraphs.en.one_day_weather_temp}${key.current.feelslike_c.toFixed(1)}°${get('temperature')},</br> 
      ${paragraphs.en.one_day_weather_wind} ${(key.current.wind_kph / 3.6).toFixed(1)}${paragraphs.en.one_day_weather_humidity}
      ${key.current.humidity}%`
    } else {
      document.getElementById('temperature').innerHTML = `${paragraphs.ru.temperature}: ${key.current.temp_c}°${get('temperature')}`

      document.getElementById('one_day_weather').innerHTML = `${paragraphs.ru.one_day_weather_outside}
      ${key.current.condition.text.charAt(0).toLowerCase() + key.current.condition.text.slice(1)}${paragraphs.ru.one_day_weather_temp}
      ${key.current.feelslike_c.toFixed(1)}°${get('temperature')},</br> 
      ${paragraphs.ru.one_day_weather_wind} ${(key.current.wind_kph / 3.6).toFixed(1)}${paragraphs.ru.one_day_weather_humidity}
      ${key.current.humidity}%`
    }

  } else {
    if(get('lang') === 'en') {
      document.getElementById('temperature').innerHTML = `${paragraphs.en.temperature}: 
        ${((key.current.temp_c * 9 / 5) + 32).toFixed(1)}°${get('temperature')}`

      document.getElementById('one_day_weather').innerHTML = `${paragraphs.en.one_day_weather_outside}
      ${key.current.condition.text.charAt(0).toLowerCase() + key.current.condition.text.slice(1)}
      ${paragraphs.en.one_day_weather_temp}
      ${((key.current.feelslike_c * 9 / 5) + 32).toFixed(1)}°${get('temperature')},</br> ${paragraphs.en.one_day_weather_wind} 
      ${(key.current.wind_kph / 3.6).toFixed(1)}${paragraphs.en.one_day_weather_humidity}
      ${key.current.humidity}%`
    } else {
      document.getElementById('temperature').innerHTML = `${paragraphs.ru.temperature}: 
        ${((key.current.temp_c * 9 / 5) + 32).toFixed(1)}°${get('temperature')}`

      document.getElementById('one_day_weather').innerHTML = `${paragraphs.ru.one_day_weather_outside}
      ${key.current.condition.text.charAt(0).toLowerCase() + key.current.condition.text.slice(1)}${paragraphs.ru.one_day_weather_temp}
      ${((key.current.feelslike_c * 9 / 5) + 32).toFixed(1)}°${get('temperature')},</br> 
      ${paragraphs.ru.one_day_weather_wind} ${(key.current.wind_kph / 3.6).toFixed(1)}${paragraphs.ru.one_day_weather_humidity}
      ${key.current.humidity}%`
    }
  }
}