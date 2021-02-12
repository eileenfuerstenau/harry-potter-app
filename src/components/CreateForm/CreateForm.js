import './CreateForm.css'
import createElement from '../../lib/createElement'

export default function CreateForm() {
  const logo = createElement('img', { src: '../../material/wappen.png' })
  const button = createElement('button', {
    className: 'CreateForm__button',
    innerHTML: 'Add more',
  })
  const form = setupForm()

  const el = createElement(
    'main',
    { className: 'CreateForm' },
    logo,
    button,
    form
  )

  function setupForm() {
    const form = createElement('form', {
      className: 'CreateForm',
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
      className: 'last',
      placeholder: 'Add birthday...',
    })

    form.append(name, house, birthday)
    return form
  }

  return {
    el,
  }
}
