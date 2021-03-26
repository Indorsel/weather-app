import { get } from './localStorage';
import { dictionary } from '../const/dictionary';

export const changeToFarenheits = (str) => {
  str = str.split('°')
  str[0] = (str[0] * 9 / 5 + 32).toFixed(1)
  str[1] = 'F'
  return str.join('°')
}

export const changeToCelsius = (str) => {
  str = str.split('°')
  str[0] = ((str[0] - 32) * 5 / 9).toFixed(1)
  str[1] = 'C'
  return str.join('°')
}

export const changeTemperatures = (key) => {
  document.getElementById('geolocation').innerHTML = `${key.location.name}, ${key.location.country}`

  let icon = 'http:' + key.current.condition.icon
  document.getElementById('icon_one_day').innerHTML =`<img src='${icon}'>`


  if (get('temperature') === 'C') {
    if(get('lang') === 'en') {
      document.getElementById('temperature').innerHTML = `${dictionary.en.temperature}: ${key.current.temp_c}°${get('temperature')}`

      document.getElementById('one_day_weather').innerHTML = `${dictionary.en.one_day_weather_outside}
      ${key.current.condition.text.charAt(0).toLowerCase() + key.current.condition.text.slice(1)}
      ${dictionary.en.one_day_weather_temp}${key.current.feelslike_c.toFixed(1)}°${get('temperature')},</br> 
      ${dictionary.en.one_day_weather_wind} ${(key.current.wind_kph / 3.6).toFixed(1)}${dictionary.en.one_day_weather_humidity}
      ${key.current.humidity}%`
    } else {
      document.getElementById('temperature').innerHTML = `${dictionary.ru.temperature}: ${key.current.temp_c}°${get('temperature')}`

      document.getElementById('one_day_weather').innerHTML = `${dictionary.ru.one_day_weather_outside}
      ${key.current.condition.text.charAt(0).toLowerCase() + key.current.condition.text.slice(1)}${dictionary.ru.one_day_weather_temp}
      ${key.current.feelslike_c.toFixed(1)}°${get('temperature')},</br> 
      ${dictionary.ru.one_day_weather_wind} ${(key.current.wind_kph / 3.6).toFixed(1)}${dictionary.ru.one_day_weather_humidity}
      ${key.current.humidity}%`
    }

  } else {
    if(get('lang') === 'en') {
      document.getElementById('temperature').innerHTML = `${dictionary.en.temperature}: 
        ${((key.current.temp_c * 9 / 5) + 32).toFixed(1)}°${get('temperature')}`

      document.getElementById('one_day_weather').innerHTML = `${dictionary.en.one_day_weather_outside}
      ${key.current.condition.text.charAt(0).toLowerCase() + key.current.condition.text.slice(1)}
      ${dictionary.en.one_day_weather_temp}
      ${((key.current.feelslike_c * 9 / 5) + 32).toFixed(1)}°${get('temperature')},</br> ${dictionary.en.one_day_weather_wind} 
      ${(key.current.wind_kph / 3.6).toFixed(1)}${dictionary.en.one_day_weather_humidity}
      ${key.current.humidity}%`
    } else {
      document.getElementById('temperature').innerHTML = `${dictionary.ru.temperature}: 
        ${((key.current.temp_c * 9 / 5) + 32).toFixed(1)}°${get('temperature')}`

      document.getElementById('one_day_weather').innerHTML = `${dictionary.ru.one_day_weather_outside}
      ${key.current.condition.text.charAt(0).toLowerCase() + key.current.condition.text.slice(1)}${dictionary.ru.one_day_weather_temp}
      ${((key.current.feelslike_c * 9 / 5) + 32).toFixed(1)}°${get('temperature')},</br> 
      ${dictionary.ru.one_day_weather_wind} ${(key.current.wind_kph / 3.6).toFixed(1)}${dictionary.ru.one_day_weather_humidity}
      ${key.current.humidity}%`
    }
  }
}