import { Container } from '@mui/material'
import React from 'react'
import ItemList from '../components/ItemList'
import productsJson from '../items.json'
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {

    const {categorias} = useParams();

    if(categorias){
      console.log(categorias)
    }

    //function to get the data of the json file
    let json = productsJson 
    const getData = () => {
      return new Promise((resolve, reject)=>{
        if(json.length === 0) {
          reject(new Error("No hay datos"))
        }
        setTimeout(() => {
          resolve(json)
        }, 2000)
      })
    }
    //async function to listen for when the 2 second time out function is run
    async function fetchJson(){
      try {
        const datosFetched = await getData();
      }catch(err){
        console.log(err)
      }
    }

    fetchJson();

    //conditional to render the page depending on where we have a useParam or not, which means we have a category or not
    if(categorias){
      return (
        <>
         <Container maxWidth="xl" sx={{
             marginTop:6
           }}>
          {
            json.filter( filter => filter.categoria.includes(`${categorias.toString()}`)).map(({id, title, description,price, pictureUrl}) => (
              <ItemList key={id} id={id} title={title} description={description} price={price} pictureUrl={pictureUrl}/>
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
            json.map(({id, title, description,price, pictureUrl}) => (
              <ItemList key={id} id={id} title={title} description={description} price={price} pictureUrl={pictureUrl}/>
            )) 
          }
         </Container>
      </>
    )
  }
}

export default ItemListContainer