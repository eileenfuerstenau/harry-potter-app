import createElement from '../../lib/createElement'
import './HomePage.css'
import getCharacters from '../../services/getCharacters'
import Card from '../../components/Card'
import HouseFilter from '../HouseFilter'
import CreateForm from '../CreateForm'

export default function HomePage() {
  const houseFilter = HouseFilter(onFilterByHouse)
  const cardContainer = createElement('div')
  const createForm = CreateForm(onSubmit)
  const el = createElement(
    'main',
    { className: 'HomePage' },
    houseFilter,
    cardContainer,
    createForm
  )
  let characters

  getCharacters()
    .then(data => {
      createCards(data)
      characters = data
    })
    .catch(error => handleGetCharacterError(error))

  function onFilterByHouse(house) {
    const filteredCharacters = characters.filter(
      character => house == null || character.house === house
    )

    createCards(filteredCharacters)
  }

  function createCards(characters) {
    const cards = characters.map(character => Card(character))
    cardContainer.innerHTML = ''
    cardContainer.append(...cards)
  }

  function handleGetCharacterError(error) {
    const errorMessage = createElement(
      'strong',
      { style: 'color: crimson;' },
      error.message
    )
    el.append(errorMessage)
  }

  function onSubmit(name, house, birthday) {
    const image = createElement('img', {
      className: 'Card__image',
      src: 'https://loremflickr.com/70/100',
    })

    const details = createElement('div', {
      className: 'Card__details',
      innerHTML: `<h1> ${name} </h1> House: ${house} <br> Birthday: ${birthday} `,
    })

    const newCard = createElement(
      'section',
      { className: 'Card' },
      details,
      image
    )

    cardContainer.append(newCard)
  }

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
    onSubmit,
  }
}
