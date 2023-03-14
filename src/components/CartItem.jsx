import { IconButton, ListItem } from '@mui/material'
import React, { useContext } from 'react'
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../context/CartContext';


const CartItem = ({id, title, description, price, pictureUrl, stock, quantity}) => {

const {removeItem} = useContext(CartContext);
  return (
    <>
        <ListItem alignItems="flex-start" xs={{margin: 'auto'}}>
              <ListItemAvatar>
                <Avatar alt={title} src={pictureUrl} />
              </ListItemAvatar>
              <ListItemText
                primary={
                <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="h1"
                      variant="body1"
                      color='#ffffff'
                    >
                      {title}
                    </Typography>
                    
                </React.Fragment>}
                secondary={
                
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color='#ffffff'
                    >
                      {description}
                      <h4>stock: {stock}</h4>
                      <h4>Price: {price}</h4>
                      <h4>Quantity: {quantity}</h4>
                    </Typography>
                    
                  </React.Fragment>
                }
              />
            <IconButton edge="end" sx={{color: 'white'}} aria-label="delete" onClick={(e) => { removeItem(id)}}>
                <DeleteIcon />
            </IconButton>
        </ListItem>
        <Divider variant="inset" component="li" />
    </>
  )
}

export default CartItem