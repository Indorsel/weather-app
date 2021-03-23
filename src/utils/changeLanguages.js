export const changeLanguages = (lang) => {
  if (lang === 'ru') {
    document.querySelector('.language').innerHTML = 'Ру / Англ'
    document.querySelector('.image').innerHTML = 'Обновить фон'
    document.querySelector('.search').placeholder = `Нажмите 'Enter' для поиска`
  } else {
    document.querySelector('.language').innerHTML = 'En / Ru'
    document.querySelector('.image').innerHTML = 'Refresh background'
    document.querySelector('.search').placeholder = `Press 'Enter' for search`
  }
}