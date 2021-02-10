import './Card.css'
import createElement from '../../lib/createElement'

export default function Card(character) {
  const image = createElement('img', {
    className: 'Card__image',
    src: character.image,
  })

  const name = createElement('h1', {
    className: 'Card__name',
    textContent: character.name,
  })

  const details = createElement('h1', {
    className: 'Card__details',
    innerHTML: `<h2> House: ${character.house} </h2> Birthday: ${character.dateOfBirth} </house>`,
  })

  const el = createElement(
    'section',
    { className: 'Card' },
    name,
    image,
    details
  )

  return el
}
