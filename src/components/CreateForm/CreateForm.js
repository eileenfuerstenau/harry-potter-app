import './CreateForm.css'
import createElement from '../../lib/createElement'

export default function CreateForm(onSubmit) {
  /* const logo = createElement('img', { src: '../../material/wappen.png' }) */
  const addButton = createElement('button', {
    className: 'CreateForm__addButton',
    innerHTML: 'Add more',
  })
  const nameInput = createElement('input', {
    name: 'nameInput',
    className: 'name',
    placeholder: 'Add name..',
  })
  const houseInput = createElement('input', {
    name: 'houseInput',
    className: 'house',
    placeholder: 'Add house...',
  })
  const birthdayInput = createElement('input', {
    name: 'birthdayInput',
    className: 'birthday',
    placeholder: 'Add birthday...',
  })
  const createButton = createElement('button', {
    classList: 'CreateForm__createButton',
    innerHTML: 'Create!',
    disabled: true,
  })

  const form = createElement(
    'form',
    {
      classList: 'CreateForm__form hidden',
    },
    nameInput,
    houseInput,
    birthdayInput,
    createButton
  )
  form.append(nameInput, houseInput, birthdayInput, createButton)

  const el = createElement('main', { className: 'CreateForm' }, addButton, form)
  el.append(addButton, form)

  addButton.addEventListener('click', () => {
    form.classList.toggle('hidden')
    nameInput.focus()
  })

  form.addEventListener('input', () => {
    if (
      form.elements.nameInput.value.length !== 0 &&
      form.elements.houseInput.value.length !== 0 &&
      form.elements.birthdayInput.value.length !== 0
    ) {
      createButton.disabled = false
    }
    if (
      form.elements.nameInput.value.length === 0 &&
      form.elements.houseInput.value.length === 0 &&
      form.elements.birthdayInput.value.length === 0
    ) {
      createButton.disabled = true
    }
  })

  form.addEventListener('submit', event => {
    event.preventDefault()
    const name = form.elements.nameInput.value
    const house = form.elements.houseInput.value
    const birthday = form.elements.birthdayInput.value
    onSubmit(name, house, birthday)
    form.reset()
    nameInput.focus()
  })

  return {
    el,
  }
}
