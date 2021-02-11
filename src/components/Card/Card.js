import './Card.css'
import createElement from '../../lib/createElement'

export default function Card(character) {
  const image = createElement('img', {
    className: 'Card__image',
    src: character.image,
  })

  const details = createElement('div', {
    className: 'Card__details',
    innerHTML: `<h1> ${character.name} </h1> House: ${
      character.house || 'n.A.'
    } <br> Birthday: ${character.dateOfBirth || 'n.A.'} `,
  })

  const el = createElement('section', { className: 'Card' }, details, image)

  return el
}
