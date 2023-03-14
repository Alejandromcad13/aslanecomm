import { Button } from '@mui/material';
import {collection, getFirestore, addDoc, serverTimestamp, doc, getDoc} from 'firebase/firestore'
import { useContext, useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const CartOrder = () => {


const {cart, cartTotal, clear} = useContext(CartContext)
const [orderID, setOrderID] = useState('');
const [fullOrder, setFullOrder] = useState(null)
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [email2, setEmail2] = useState('');
const [phone, setPhone] = useState('');
const [disabled , setDisabled] = useState(true)

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

//submits the form and adds a document to firebase, then we retrieve that document created by using the id
//and we show it on the checkout section
const handleSubmit = (e) => {
    e.preventDefault();
    //addDoc is a promise and I want the id if it succeeds
    addDoc(ordersCollection, order)
    .then(docRef => {
      setOrderID(docRef.id)
      const productDoc = doc(db, 'orders', `${docRef.id}`);
        getDoc(productDoc)
        .then((snapshot) => {
            if(snapshot.exists()){
                setFullOrder({
                    id: snapshot.id,
                    ...snapshot.data()
                })
            }
        })
        .catch(console.error)
  })
}

//form email validation
useEffect(()=>{
  if(email === '' && email2 === ''){
    setDisabled(true)
  }else if(email === email2){
    setDisabled(false)
  }else{
    setDisabled(true)
  }
})


  if(orderID === ''){
    return ( 
      <>
        <form onSubmit={handleSubmit}>
            <input type="text" id='name' placeholder='AGREGA TU NOMBRE' onChange={(e) => { setName(e.target.value)}}/>
            <input type="email" id='email' placeholder='AGREGA TU EMAIL' onChange={(e) => { setEmail(e.target.value)}} />
            <input type="email" id='email2' placeholder='CONFIRMA TU EMAIL' onChange={(e) => { setEmail2(e.target.value)}} />
            <input type="number" id='phone' placeholder='AGREGA TU NUMERO ' onChange={(e) => { setPhone(e.target.value)}} />
            <Button size="medium" type='submit' variant={'outlined'} sx={{margin:'20px'}} disabled={disabled}>Realizar Compra!</Button>
        </form>
        <h2>Total: {cartTotal}</h2>
      </>
    )
  } else if (fullOrder !== null ){
    return (
      <>

        <h1>Tu orden fue creada con exito!</h1>
        <h3>Datos de la orden: </h3>
        <p>Numero de orden creada: {orderID}</p>
        <p>Nombre del cliente: {fullOrder.buyer.name}</p>
        <p>Correo del cliente: {fullOrder.buyer.email}</p>
        {
          fullOrder.items.map(({title}) => (
            <p>Nombre del producto: {title}</p>
          )) 
        }
        <h2>Monto Total: {fullOrder.total}</h2>

        <h1><NavLink onClick={clear} variant={'outlined'} sx={{margin:'20px'}} to={'/'}> Vaciar mi carrito y comprar mas productos!</NavLink></h1>
        
      </>

    )
  }
}

export default CartOrder;