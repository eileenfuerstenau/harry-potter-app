import './CreateForm.css'
import createElement from '../../lib/createElement'

export default function CreateForm() {
  const logo = createElement('img', { src: '../../material/wappen.png' })
  const addButton = createElement('button', {
    className: 'CreateForm__addButton',
    innerHTML: 'Add more',
  })
  const nameInput = createElement('input', {
    className: 'name',
    placeholder: 'Add name..',
  })

  const houseInput = createElement('input', {
    className: 'house',
    placeholder: 'Add house...',
  })
  const birthdayInput = createElement('input', {
    className: 'birthday',
    placeholder: 'Add birthday...',
  })

  const form = createElement(
    'form',
    {
      classList: 'CreateForm__form hidden',
    },
    nameInput,
    houseInput,
    birthdayInput
  )
  form.append(nameInput, houseInput, birthdayInput)
  /* */
  const createButton = createElement('button', {
    classList: 'CreateForm__createButton hidden',
    innerHTML: 'Create!',
    disabled: true,
  })

  const el = createElement(
    'main',
    { className: 'CreateForm' },
    logo,
    addButton,
    form,
    createButton
  )

  addButton.addEventListener('click', () => {
    form.classList.toggle('hidden')
    createButton.classList.toggle('hidden')
  })

  form.addEventListener('input', event => {
    if (
      nameInput.value.length !== 0 &&
      houseInput.value.length !== 0 &&
      birthdayInput.value.length !== 0
    ) {
      createButton.disabled = false
    }
    if (
      nameInput.value.length !== 0 &&
      houseInput.value.length !== 0 &&
      birthdayInput.value.length === 0
    ) {
      createButton.disabled = true
    }
  })

  return {
    el,
  }
}
