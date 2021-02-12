import './Button.css'
import createElement from '../../lib/createElement'

export default function Button(houses, onClick) {
  const el = createElement('span', {
    className: 'Button__container',
    role: 'button',
    innerHTML: `<img class="Button__housefilter" src="../../material/${houses.toLowerCase()}.png" height= 80>`,
  })

  el.addEventListener('click', onClick)

  function toggle(force) {
    el.classList.toggle('selected', force)
  }

  function updateText(text) {
    el.innerText = text
  }

  return { el, updateText, toggle }
}
