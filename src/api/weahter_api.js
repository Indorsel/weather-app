import { request } from './fetchRequest'
import { WEATHER_API_KEY } from '../const/api_keys'

export const getWeather = (location, days) => {
  if (typeof location !== 'string') {
    location = location.lat + ','+ location.lng
  }
  return request(
    `${WEATHER_API_KEY.url}forecast.json?key=${WEATHER_API_KEY.token}&q=${location}&days=${days}`
  )
}
