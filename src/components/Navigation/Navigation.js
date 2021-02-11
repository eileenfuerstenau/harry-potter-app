import createElement from '../../lib/createElement'
import './Navigation.css'

import homeSVG from '@fortawesome/fontawesome-free/svgs/solid/flag.svg'
import favoritesSVG from '@fortawesome/fontawesome-free/svgs/solid/star.svg'

const buttonsConfig = [
  { svgPath: homeSVG, text: 'All characters' },
  { svgPath: favoritesSVG, text: 'Favorites' },
]

export default function Navigation(onNavigate) {
  const buttons = buttonsConfig.map(({ svgPath, text }) => {
    const button = createElement(
      'button',
      { className: 'Navigation__button' },
      createElement('img', { src: svgPath, alt: '' }),
      text
    )
    button.addEventListener('click', () => onNavigate(text))
    return button
  })

  return createElement('nav', { className: 'Navigation' }, ...buttons)
}
