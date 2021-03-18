import { request } from './requestsForApi'
import { IMAGES_API_KEY } from '../const/api_keys'

export const getImage = () => {
  return request(
    `${IMAGES_API_KEY.url}photos/random?orientation=landscape&per_page=1&query=Wallpapers&client_id=${IMAGES_API_KEY.token}`
  )
}