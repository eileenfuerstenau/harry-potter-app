import './Button.css'
import createElement from '../../lib/createElement'

export default function Button(text) {
  const el = createElement('button', { className: 'Button' }, text)

  return el
}
