import { request } from './fetchRequest';
import { GEOCODING_API_KEY } from "../const/api_keys";


export const getGeocodingData = (name) => {
  return request(`${GEOCODING_API_KEY.url}json?q=${name}&key=${GEOCODING_API_KEY.token}&pretty=1&no_annotations=1`)
}
