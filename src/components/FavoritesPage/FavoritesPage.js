import createElement from '../../lib/createElement'
import './FavoritesPage.css'

export default function FavoritesPage(hidden) {
  const el = createElement('main', { className: 'FavoritesPage', hidden: true })

  const test = createElement('h1', {
    innerHTML: `One day, you will see your favorite Harry Potter characters right here. One day. `,
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
