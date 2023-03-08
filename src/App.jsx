import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/NavBar'
import ItemDetailContainer from './containers/ItemDetailContainer'
import ItemListContainer from './containers/ItemListContainer'
import Cart from './components/Cart' 
import ShoppingCart from './context/CartContext'



function App() {

  return (
    <ShoppingCart>
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
    </ShoppingCart>
  )
}

export default App


