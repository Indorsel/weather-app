export const changeLanguages = (lang) => {
  if (lang === 'ru') {
    document.querySelector('.language').innerHTML = 'Ру / Англ'
    document.querySelector('.image').innerHTML = 'Обновить фон'
  } else {
    document.querySelector('.language').innerHTML = 'En / Ru'
    document.querySelector('.image').innerHTML = 'Refresh background'
  }
}