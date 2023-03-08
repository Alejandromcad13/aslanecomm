import { Button } from '@mui/material';
import {collection, getFirestore, addDoc, serverTimestamp } from 'firebase/firestore'
import { useContext, useEffect, useState} from 'react'
import { CartContext } from '../context/CartContext';

const CartOrder = () => {

const {cart, cartTotal} = useContext(CartContext)
const [orderID, setOrderID] = useState(null);
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [phone, setPhone] = useState('');

//call database
const db = getFirestore();
const ordersCollection = collection(db, 'orders');
const order = {
    buyer: {
        name: name,
        email:email,
        phone:phone
    }, 
    items: cart,
    date: serverTimestamp(),
    total: cartTotal
}

const handleSubmit = (e) => {
    e.preventDefault();
    //addDoc is a promise and I want the id if it succeeds
    addDoc(ordersCollection, order)
    .then(({id}) => setOrderID(id))
}

  return ( 
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='nombre y apellido' onChange={(e) => { setName(e.target.value)}}/>
        <input type="email" placeholder='email' onChange={(e) => { setEmail(e.target.value)}} />
        <input type="number" placeholder='phone' onChange={(e) => { setPhone(e.target.value)}} />
        <Button size="medium" type='submit' variant={'outlined'} sx={{margin:'20px'}}>Crear Orden</Button>
    </form>

    <p>Numero de orden creada: {orderID}</p>
    </>
  )
}

export default CartOrder;