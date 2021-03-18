import { request } from './requestsForApi';
import { GEOLOCATION_API } from "../const/api_keys";


export const getGeolocation = () => {
  return request(`${GEOLOCATION_API.url}json?token=${GEOLOCATION_API.token}`)
}




// async getGeolocation = () => {
//   const request = await fetch("https://ipinfo.io/json?token=7afbe9379bf0ee")
//   const json = await request.json()

//   console.log(jsonResponse.ip, jsonResponse.country)
// }