import Item from './Item'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const ItemList = ({id, title, description, price, pictureUrl, stock}) => {
  return (
    <Box sx={{ display: 'inline-grid', margin:2}}>
      <Grid container>
          <Grid item>
            <Item id={id} stock={stock} title={title} description={description} price={price} pictureUrl={pictureUrl}/>
          </Grid>
      </Grid>
    </Box>
  )
}

export default ItemList