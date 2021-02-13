import './CreateForm.css'
import createElement from '../../lib/createElement'

export default function CreateForm() {
  const logo = createElement('img', { src: '../../material/wappen.png' })
  const addButton = createElement('button', {
    className: 'CreateForm__addButton',
    innerHTML: 'Add more',
  })
  const form = setupForm()
  const createButton = createElement('button', {
    classList: 'CreateForm__createButton, hidden',
    innerHTML: 'Create!',
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

  function setupForm() {
    const form = createElement('form', {
      classList: 'CreateForm__form, hidden',
    })

    const name = createElement('input', {
      className: 'first',
      placeholder: 'Add name..',
    })

    const house = createElement('input', {
      className: 'last',
      placeholder: 'Add house...',
    })
    const birthday = createElement('input', {
      className: 'birthday',
      placeholder: 'Add birthday...',
    })

    form.append(name, house, birthday)
    return form
  }

  return {
    el,
  }
}
