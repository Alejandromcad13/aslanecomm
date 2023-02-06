import React from 'react'
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import { ThemeProvider, createTheme } from '@mui/material/styles';


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
      <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
          <p>5</p>
      </IconButton> 
    </ThemeProvider>
  )
}

export default CartWidget