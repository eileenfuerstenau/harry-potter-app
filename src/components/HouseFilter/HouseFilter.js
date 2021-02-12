import './HouseFilter.css'
import Button from '../Button'
import createElement from '../../lib/createElement'

export default function HouseFilter(onFilterByHouse) {
  const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin']
  const buttons = houses.map(house => {
    const button = Button(house, () => {
      onFilterByHouse(house)
      buttons.forEach(button => button.toggle(false))
      button.toggle()
    })
    return button
  })

  const el = createElement('section', { className: 'HouseFilter' }, ...buttons)
  return el
}
