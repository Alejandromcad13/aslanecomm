import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/NavBar'
import ItemDetailContainer from './containers/ItemDetailContainer'
import ItemListContainer from './containers/ItemListContainer'
import Cart from './components/Cart' 


function App() {

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route exact path="/" element={<ItemListContainer />}></Route>
        <Route exact path="/categorias" element={<ItemListContainer />}></Route>
        <Route exact path="/categorias/:categorias" element={<ItemListContainer />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
        <Route exact path="/item/:id" element={<ItemDetailContainer />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App


