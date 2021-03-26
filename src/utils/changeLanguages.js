import { dictionary } from '../const/dictionary';

export const changeLanguages = (lang) => {
  if (lang === 'ru') {
    document.querySelector('.language').innerHTML = dictionary.ru.language
    document.querySelector('.image').innerHTML = dictionary.ru.image
    document.querySelector('.search').placeholder = dictionary.ru.search
  } else {
    document.querySelector('.language').innerHTML = dictionary.en.language
    document.querySelector('.image').innerHTML = dictionary.en.image
    document.querySelector('.search').placeholder = dictionary.en.search
  }
}