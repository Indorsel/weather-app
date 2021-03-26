import { changeToFarenheits } from './changeTemperatures';
import { changeLanguages } from './changeLanguages';
import { RU, EN } from '../const/languages';

export const templateEn = (temperature, lang) => {
  let temp = changeToFarenheits(temperature)
  switch (lang) {
    case RU: 
      changeLanguages(RU)
      break
    default:
      changeLanguages(EN)


  }  
}