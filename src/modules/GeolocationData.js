import { elementCreate } from '../utils/elementCreate'
import { MAP_API_KEY } from "../const/api_keys";
import mapboxgl from 'mapbox-gl/dist/mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { get } from '../utils/localStorage';

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
    let geolocationData = document.getElementById('geolocationData')
    if (geolocationData) {
      geolocationData.remove()
    }
    let layoutElem = elementCreate('div','geolocation_data')
    layoutElem.id = 'geolocationData'
    document.body.append(layoutElem)
            
    let location = elementCreate('div', 'location')
    location.id = 'coordinates'
    layoutElem.append(location)
    if(this.value[0] === undefined) {
      this.value[1] = `${this.value.lon}`
      this.value[0] = `${this.value.lat}`
    } else if (typeof this.value === 'string') {
      this.value = this.value.split(',')
    }
    let longtitude = this.getDegreesMinutesFromCoordinates(this.value[1])
    let latitude = this.getDegreesMinutesFromCoordinates(this.value[0])

    document.querySelector('#coordinates').innerHTML = `<p>logtitude ${longtitude}, latitude ${latitude}</p>`

    document.querySelector('.language').addEventListener('mousedown', function (event) {
      if(get('lang') === 'en') {
        document.querySelector('#coordinates').innerHTML = `<p>logtitude ${longtitude}, latitude ${latitude}</p>`
      } else {
        document.querySelector('#coordinates').innerHTML = `<p>долгота ${longtitude}, широта ${latitude}</p>`
      }
    })

    let mapWrapper = elementCreate('div', 'mapbox')
    mapWrapper.id = 'map'
    layoutElem.append(mapWrapper)
  }

  async createMap(key) {
    mapboxgl.accessToken = key.token
    const map = await new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [this.value[1], this.value[0]], // starting position [lng, lat]
      zoom: 11 // starting zoom
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