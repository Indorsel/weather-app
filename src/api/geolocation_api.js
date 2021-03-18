import { request } from './fetchRequest';
import { GEOLOCATION_API } from "../const/api_keys";


export const getGeolocation = () => {
  return request(`${GEOLOCATION_API.url}json?token=${GEOLOCATION_API.token}`)
}
