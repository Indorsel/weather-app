import { elementCreate } from '../utils/elementCreate'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { MAP_API_KEY } from "../const/api_keys";

export class GeolocationData {
  constructor(value) {
    this.value = value
  }

  addElementsInBlock() {
    let layoutElem = elementCreate('div','geolocation_data')
    document.body.append(layoutElem)

    let location = elementCreate('div', 'location')
    layoutElem.append(location)
    document.querySelector('.location').innerHTML = `<p>долгота ${this.value[1]}, широта ${this.value[0]}</p>`

    let mapWrapper = elementCreate('div', 'mapbox')
    mapWrapper.id = 'map'
    layoutElem.append(mapWrapper)
  }

  async createMap(key) {
    mapboxgl.accessToken = key.token
    const map = await new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [this.value[1],this.value[0]], // starting position [lng, lat]
      zoom: 10 // starting zoom
    });
    
    map.on('load', function () {
      map.resize();
    });
  }

  createMapInMapbox() {
    let map = this.createMap(MAP_API_KEY)
    let mapWrapper = document.querySelector('.mapbox')
    mapWrapper.append(map)
  }

  createGeolocationBlock() {
    this.addElementsInBlock()
    this.createMapInMapbox()
  }

  render() {
    this.createGeolocationBlock()
  }
}