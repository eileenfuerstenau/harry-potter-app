import AppHeader from './components/AppHeader'
import Navigation from './components/Navigation'
import Grid from './components/Grid'
import HomePage from './components/HomePage'
import FavoritesPage from './components/FavoritesPage'

export default function App() {
  const header = AppHeader('Harry Potter App')
  const navigation = Navigation(onNavigate)
  const homePage = HomePage()
  const favoritesPage = FavoritesPage()
  const grid = Grid(header, homePage, favoritesPage, navigation)

  document.body.append(grid)

  function onNavigate(text) {
    if (text === 'Home') {
      console.log(text)
      homePage.show()
      favoritesPage.hide()
    }

    if (text === 'Favorites') {
      console.log(text)
      homePage.hide()
      favoritesPage.show()
    }
  }
}
