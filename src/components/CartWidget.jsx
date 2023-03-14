import React, { useContext} from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#ffb74d',
    },
  },
});


const CartWidget = () => {
  
  const {cartItems} = useContext(CartContext);
  
  return (
    <ThemeProvider theme={lightTheme}> 
      <NavLink to={'/cart'}>
        <Badge badgeContent={cartItems} color="primary">
          <AddShoppingCartIcon />
        </Badge>
      </NavLink>
    </ThemeProvider>
  )
}

export default CartWidget