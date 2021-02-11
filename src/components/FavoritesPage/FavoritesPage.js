import createElement from '../../lib/createElement'
import './FavoritesPage.css'

export default function FavoritesPage(hidden) {
  const el = createElement('main', { className: 'FavoritesPage', hidden: true })

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
