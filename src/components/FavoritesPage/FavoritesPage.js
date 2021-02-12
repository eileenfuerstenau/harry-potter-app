import createElement from '../../lib/createElement'
import './FavoritesPage.css'

export default function FavoritesPage(hidden) {
  const el = createElement('main', { className: 'FavoritesPage', hidden: true })

  const test = createElement('div', {
    innerHTML: `<img src="https://loremflickr.com/80/100">`,
  })
  el.append(test)

  function show() {
    el.hidden = false
  }

  function hide() {
    el.hidden = true
  }

  return {
    el,
    show,
    hide,
  }
}
