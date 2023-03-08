import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import List from '@mui/material/List';
import { Container, Button } from '@mui/material';
import CartItem from './CartItem';
import { NavLink } from 'react-router-dom';
import CartOrder from './CartOrder';

const Cart = () => {

  const {cart, removeItem, cartTotal} = useContext(CartContext)

  if(cart.length !== 0){
    return (
      <>  
        <Container maxWidth={'lg'}>
          <h1>Productos en el carro:</h1>
          <List sx={{ width: '100%', bgcolor: '#212121', alignItems:'center' }}>
          {
            cart.map(({id, title, description,price, pictureUrl, stock, quantity}) => (
              <CartItem key={id} id={id} title={title} description={description} price={price} pictureUrl={pictureUrl} stock={stock} quantity={quantity}/>
            )) 
          }
          </List>
          <CartOrder />
          <h2>Total: {cartTotal}</h2>
        </Container>
      </>
    )
  }else{
    return (
    <>
    <Container maxWidth={'lg'}>
      <h1>No hay productos en el carrito</h1>
      <NavLink to={`/`}>
        <Button size="small" variant={'outlined'}>Buscar productos</Button>
      </NavLink>
    </Container></>
  )
  }
}

export default Cart