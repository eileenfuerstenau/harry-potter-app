import './AppHeader.css'

export default function AppHeader(title) {
  const el = document.createElement('header')
  el.className = 'Header'
  el.innerHTML = `<img class="Header__lettering" src="../../material/harrypotter.png" height= 50>`
  return el
}
