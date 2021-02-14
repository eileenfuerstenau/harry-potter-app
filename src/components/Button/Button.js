import './Button.css'
import createElement from '../../lib/createElement'

export default function Button(houses, onClick) {
  const el = createElement('div', {
    role: 'button',
    innerHTML: `<img src="../../material/${houses.toLowerCase()}.png" alt="" height= 80>`,
  })

  el.addEventListener('click', onClick)

  function toggle(house) {
    el.classList.toggle('selected')
  }

  return { el, toggle }
}
