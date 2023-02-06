import './App.css'
import Navbar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer'

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greetings={"Bienvenidos a AslanPetStore!"}/>
    </>
  )
}

export default App


