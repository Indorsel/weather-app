import { elementCreate } from '../utils/elementCreate'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { MAP_API_KEY } from "../const/api_keys";

export class GeolocationData {
  constructor(value) {
    this.value = value
  }

  getDegreesMinutesFromCoordinates(str) {
    let degrees, minutes
    degrees = `${str.slice(0, 2)}°`
    minutes = `${Math.round(str.slice(3, 5) * 0.6)}'`
    return degrees.concat(minutes)
  }

  addElementsInBlock() {
    let layoutElem = elementCreate('div','geolocation_data')
    document.body.append(layoutElem)

    let location = elementCreate('div', 'location')
    layoutElem.append(location)
    let longtitude = this.getDegreesMinutesFromCoordinates(this.value[1])
    let latitude = this.getDegreesMinutesFromCoordinates(this.value[0])
    document.querySelector('.location').innerHTML = `<p>долгота ${longtitude}, широта ${latitude}</p>`

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
      zoom: 12 // starting zoom
    });
    
    map.on('load', function () {
      map.resize();
    });
  }

  putMapInMapbox() {
    let map = this.createMap(MAP_API_KEY)
    let mapWrapper = document.querySelector('.mapbox')
    mapWrapper.append(map)
  }

  createGeolocationBlock() {
    this.addElementsInBlock()
    this.putMapInMapbox()
  }

  render() {
    this.createGeolocationBlock()
  }
}