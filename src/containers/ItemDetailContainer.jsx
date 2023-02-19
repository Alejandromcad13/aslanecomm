import { useEffect, useState } from 'react'
import Data from '../items.json'
import ItemDetail from '../components/ItemDetail'
import { Container } from '@mui/system'
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    //define item variable
    let [item, setItem] = useState({})
    let [count, setCount] = useState(0)
    const {id} = useParams();

    const getItem = () => {
        return new Promise((resolve, reject)=>{
            if(Data.length === 0){
                reject(new Error("No hay items"))
            }
            setTimeout(()=>{
                setItem(item = Data[id - 1])
                console.log(id)
                resolve(item)
            }, 500)
        })
    }


    useEffect(()=>{
        const fetchItems = async() => {
            const fetchedItems = await getItem();
        }

        fetchItems()

        .catch(console.error)
    }, [])

  return (
    <>
    <Container maxWidth="lx" sx={{
            marginTop:10
          }}>
        <Grid container>
            <Grid item xs={12}>
                <ItemDetail id={item.id} 
                title={item.title} 
                description={item.description} 
                pictureUrl={item.pictureUrl} 
                price={item.price}
                />
            </Grid>
            
        </Grid>
    </Container>
    </>
  )
}

export default ItemDetailContainer