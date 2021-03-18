import { elementCreate } from '../utils/elementCreate'
// import { geolocationApi } from '../api/api';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { MAP_API_KEY } from "../const/api_keys";

export class GeolocationData {
  constructor(value) {
    this.value = value
  }

  createGeolocationBlock() {
    let layoutElem = elementCreate('div','geolocation_data')
    document.body.append(layoutElem)

    let location = elementCreate('div', 'location')
    layoutElem.append(location)
    document.querySelector('.location').innerHTML = `<p>Current location: longitude столько-то, latitude столько-то</p>`

    let mapWrapper = elementCreate('div', 'mapbox')
    mapWrapper.id = 'map'
    layoutElem.append(mapWrapper)
  }

  async createMap(key) {
    mapboxgl.accessToken = key.token
    const map = await new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [27.5667,53.9000], // starting position [lng, lat]
      zoom: 10 // starting zoom
    });

    map.on('load', function () {
      map.resize();
    });
  }

  async getResponse() {
    // debugger
    // let location = geolocationApi.getGeolocation()
    // let [lat, lng] = location.loc.split(',')
    // console.log(lat, lng)
    // let getResponse = fetch("https://ipinfo.io/json?token=7afbe9379bf0ee")
    // .then(
    //   (response) => response.json()
    // ).then(
    //   (jsonResponse) => console.log(jsonResponse.ip, jsonResponse.country)
    // )
    // console.log(getResponse)
  }

  getGeolocationData() {
    // const successCallback = (position) => {
    //   console.log(position)
    // }
    // const errorCallback = (error) => {
    //   console.error(error)
    // }
    // //даёт статичное положение юзера без обновлений
    // navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
    //   enableHighAccuracy: true,
    //   timeout: 5000,      //время до вызова error если не передаются данные
    //   maximumAge: 0       //параметр для обновления местоположения (0–получение реальной позиции, infinity– возврат кэшированной, начальной позиции)
    // })
    // //обновляет положение юзера 
    // // const watchId = navigator.geolocation.watchPosition(successCallback, errorCallback) 
    
    // fetch("https://ipinfo.io/json?token=7afbe9379bf0ee").then(
    //   (response) => response.json()
    // ).then(
    //   (jsonResponse) => console.log(jsonResponse.ip, jsonResponse.country)
    // )
  }

  render() {
    this.createGeolocationBlock()
    // this.getGeolocationData()
    this.getResponse()

    let map = this.createMap(MAP_API_KEY)
    let mapWrapper = document.querySelector('.mapbox')
    mapWrapper.append(map)
  }
}