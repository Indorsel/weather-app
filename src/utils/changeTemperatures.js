import { get } from './localStorage'

export const changeTemperatures = (key) => {
  document.getElementById('geolocation').innerHTML = `${key.location.name}, ${key.location.country}`

  let icon = 'http:' + key.current.condition.icon
  document.getElementById('icon_one_day').innerHTML =`<img src='${icon}'>`


  if (get('temperature') === 'C') {
      document.getElementById('temperature').innerHTML = `Температура сейчас: ${key.current.temp_c}
      °${get('temperature')}`

      document.getElementById('one_day_weather').innerHTML = `На улице ${key.current.condition.text.charAt(0).toLowerCase() + key.current.condition.text.slice(1)}, 
        ощущаемая температура ${key.current.feelslike_c.toFixed(1)}°${get('temperature')},</br>
        скорость ветра ${((key.current.wind_kph * 1) / 3.6).toFixed(1)}м/с, 
        влажность ${key.current.humidity}%`
    } else {
      document.getElementById('temperature').innerHTML = `Температура сейчас: 
        ${(key.current.temp_c * 9 / 5) +32}°${get('temperature')}`

      document.getElementById('one_day_weather').innerHTML = `На улице ${key.current.condition.text.charAt(0).toLowerCase() + key.current.condition.text.slice(1)}, 
        ощущаемая температура ${((key.current.feelslike_c * 9 / 5) +32).toFixed(1)}°${get('temperature')},</br>
        скорость ветра ${((key.current.wind_kph * 1) / 3.6).toFixed(1)}м/с, 
        влажность ${key.current.humidity}%`
    }
}