import React from 'react'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider'; 
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { NavLink, Link } from 'react-router-dom';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    }
  },
});


const Item = ({id, title, description, price, pictureUrl}) => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Card sx={{ maxWidth: 250 , boxShadow:12}}>
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
            <Typography variant="body2" color="text.secondary" sx={{padding:3 , minHeight:150}}>
              {description}
            </Typography>
            <Stack spacing={1} alignItems="center">
              <Stack direction="row" alignItems="center" spacing={1}>
                 <Chip label={"Price: " + price} variant="outlined"></Chip>
                 <Chip label={"Id: " + id} color="primary" variant='outlined'></Chip>
              </Stack>
            </Stack>
          </CardContent>
          <Divider />
          <CardActions>
            <NavLink to={`/item/${id}`}>
                <Button size="small">Más Detalles</Button>
            </NavLink>
          </CardActions>
        </Card>
      </ThemeProvider>
    </>
    
  )
}

export default Item