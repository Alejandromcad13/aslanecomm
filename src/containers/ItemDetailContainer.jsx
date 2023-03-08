import { useEffect, useState } from 'react'
import ItemDetail from '../components/ItemDetail'
import { Container } from '@mui/system'
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom';
import { doc , getFirestore, getDoc} from 'firebase/firestore';

const ItemDetailContainer = () => {
    //define item variable
    let [item, setItem] = useState({})
    const {id} = useParams();


    //use efect to wait for firestore return
    useEffect(()=>{
        const db = getFirestore();
        const productDoc = doc(db, 'productos', `${id}`);
        getDoc(productDoc)
        .then((snapshot) => {
            if(snapshot.exists()){
                setItem({
                    id: snapshot.id,
                    ...snapshot.data()
                })
            }
        })
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
                stock={item.stock}
                />
            </Grid>
            
        </Grid>
    </Container>
    </>
  )
}

export default ItemDetailContainer