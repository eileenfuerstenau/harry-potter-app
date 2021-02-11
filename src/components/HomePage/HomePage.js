import createElement from '../../lib/createElement'
import './HomePage.css'
import getCharacters from '../../services/getCharacters'
import Card from '../../components/Card'

export default function HomePage(cards) {
  /* const tryout = createElement('div', { innerHTML: `Hi there, how are you` }) */
  const el = createElement('main', { className: 'HomePage' })

  getCharacters()
    .then(characters => createCards(characters))
    .catch(error => handleGetCharacterError(error))

  function createCards(characters) {
    const cards = characters.map(character => Card(character))
    document.body.append(...cards)
  }

  function handleGetCharacterError(error) {
    const errorMessage = createElement(
      'strong',
      { style: 'color: crimson;' },
      error.message
    )
    document.body.append(errorMessage)
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
