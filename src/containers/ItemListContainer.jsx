import { Container } from '@mui/material'
import React from 'react'
import ItemList from '../components/ItemList'
import { useParams } from 'react-router-dom';
import { useEffect, useContext, useState } from 'react';
import {collection, getFirestore, getDocs} from 'firebase/firestore';


const ItemListContainer = () => {
    //recibo el parametro del URL si hay
    const {categorias} = useParams();
    //empty list of products
    const [products, setProducts] = useState([]);

    if(categorias){
      console.log(categorias)
    }

    //use efect to get the collection from firestore
    useEffect(()=>{
      //retrieve the database from firestore and store it on a variable 
      const db = getFirestore();

      const productCollection = collection(db, 'productos');
      //promise to retrieve the collection. 
      getDocs(productCollection).then((snapshot) => {
        //with the results we map the list and populate the empty product List
        if(snapshot.size === 0){
          console.log("No hay productos!")
        }
        setProducts(snapshot.docs.map((prod)=>({
            id: prod.id,
            ...prod.data()
          })))
          
        }).catch(console.error);   
  }, [])


    //conditional to render the page depending on where we have a useParam or not, which means we have a category or not
    if(categorias){
      return (
        <>
         <Container maxWidth="xl" sx={{
             marginTop:6
           }}>
          {
            products.filter( filter => filter.categoria.includes(`${categorias.toString()}`)).map(({id, title, description,price, pictureUrl, stock}) => (
              <ItemList key={id} id={id} title={title} description={description} price={price} pictureUrl={pictureUrl} stock={stock}/>
           ))
          }
         </Container>
        </>
     );
  }else{
    return (
      <>
      <Container maxWidth="xl" sx={{
             marginTop:6
           }}>
          {
            products.map(({id, title, description,price, pictureUrl, stock}) => (
              <ItemList key={id} id={id} title={title} description={description} price={price} pictureUrl={pictureUrl} stock={stock}/>
            )) 

          }
         </Container>
      </>
    )
  }
}

export default ItemListContainer

