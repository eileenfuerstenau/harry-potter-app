import createElement from '../../lib/createElement'
import './HomePage.css'
import getCharacters from '../../services/getCharacters'
import Card from '../../components/Card'
import HouseFilter from '../HouseFilter'

export default function HomePage() {
  const houseFilter = HouseFilter(onFilterByHouse)
  const cardContainer = createElement('div')
  const el = createElement(
    'div',
    { className: 'HomePage' },
    houseFilter,
    cardContainer
  )
  let characters

  getCharacters()
    .then(data => {
      createCards(data)
      characters = data
    })
    .catch(error => handleGetCharacterError(error))

  function onFilterByHouse(house) {
    console.log('App says: ', house)
    const filteredCharacters = characters.filter(
      character => character.house === house
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
