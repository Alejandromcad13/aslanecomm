import React, { useContext, useState } from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider'; 
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { CartContext } from '../context/CartContext';
import Alert from '@mui/material/Alert';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    }
  },
});
const ItemDetail = ({id, title, description, price, pictureUrl, stock}) => {

  const [itemQuantity, setItemQuantity] = useState(1)

  const {cart, addItem, removeItem} = useContext(CartContext);

  const addQuantity = () => {
    if(itemQuantity < stock){
      setItemQuantity( itemQuantity + 1)
      
    }else{
      console.log('item is out of stock!')
      return true
    }
    return false
  }
  
  const removeQuantity = () => {
    if(itemQuantity > 0){
      setItemQuantity(itemQuantity - 1)
      
    }else{
      console.log('You cannot add less than 1 item')
      return true
    }
    return false
  }

  return (
    <>
    <Box sx={{ display: 'inline-grid', margin:2}}>
      <Grid container>
          <Grid item>
          <ThemeProvider theme={darkTheme}>
            <Card sx={{ maxWidth: 400 , boxShadow:12}}>
              <CardMedia
                  sx={{ height: 300, padding:5 }}
                image={pictureUrl}
                title={title}
                
              />
              <CardContent sx={{padding:0, paddingTop: 1, paddingBottom:1, minHeight:250}}>
                <Typography gutterBottom variant="h5" component="div" sx={{padding:1}}>
                  {title}
                </Typography>
                <Divider />
                <Typography variant="body2" color="text.secondary" sx={{padding:2 , minHeight: 100}}>
                  {description}
                </Typography>
                
                <Stack spacing={1} alignItems="center">
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Chip label={"Price: " + price} variant="outlined"></Chip>
                    <Chip label={"stock: " + stock} color="primary" variant='outlined'></Chip>
                  </Stack>
                </Stack>
              </CardContent>
              <Divider />
                <Stack spacing={1} alignItems="center" p={2}>
                  {itemQuantity === 0 || itemQuantity >= stock ?  <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="info">No puedes agregar mas o menos de los items en stock</Alert>
                  </Stack> : ''}
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Button variant="outlined" size="medium" onClick={removeQuantity}> <RemoveIcon/>remover</Button>
                    <Chip label={"items: " + itemQuantity} color="primary"></Chip>
                    <Button variant="outlined" size="medium" onClick={addQuantity}><AddIcon/>agregar</Button>
                  </Stack>
                </Stack>
                <Stack spacing={1} alignItems="center" p={2}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Button variant="outlined" size="small" onClick={(e)=> addItem({
                      id:id,
                      price:price,
                      title:title,
                      description:description,
                      pictureUrl:pictureUrl,
                      stock:stock,
                      }, itemQuantity, id, stock)}>Agregar al Carrito </Button>
                  </Stack>
                </Stack>
            </Card>
          </ThemeProvider>
          </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default ItemDetail   