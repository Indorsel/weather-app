import { changeToCelsius } from './changeTemperatures';
import { changeLanguages } from './changeLanguages';
import { RU, EN } from '../const/languages';


export const templateC = (temperature, lang) => {
  let temp = changeToCelsius(temperature)
  switch (lang) {
    case RU: 
      changeLanguages(RU)
      break
    default:
      changeLanguages(EN)


  }  
}