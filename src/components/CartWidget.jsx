import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';


const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#ffb74d',
    },
  },
});


const CartWidget = () => {
  return (
    <ThemeProvider theme={lightTheme}> 
      <NavLink to={'/cart'}>
        <Badge badgeContent={4} color="primary">
          <AddShoppingCartIcon />
        </Badge>
      </NavLink>
    </ThemeProvider>
  )
}

export default CartWidget