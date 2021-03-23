import { paragraphs } from '../const/paragraphs';

export const changeLanguages = (lang) => {
  if (lang === 'ru') {
    document.querySelector('.language').innerHTML = paragraphs.ru.language
    document.querySelector('.image').innerHTML = paragraphs.ru.image
    document.querySelector('.search').placeholder = paragraphs.ru.search
  } else {
    document.querySelector('.language').innerHTML = paragraphs.en.language
    document.querySelector('.image').innerHTML = paragraphs.en.image
    document.querySelector('.search').placeholder = paragraphs.en.search
  }
}