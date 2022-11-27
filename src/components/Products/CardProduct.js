import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CardProduct = ({ title, price, image, category, content}) => {
   
  return (
    <Card sx={{ minWidth: 275, maxWidth: 275, margin: 1 }}>
            <CardMedia
            component='img'
            image={image}
            />
            <CardContent >
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                 </Typography>
                 <Typography gutterBottom variant="h5" component="div">
                    {price + " RON"}
                 </Typography>
                <Typography variant="body2" color="text.secondary">
                    {content}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShoppingCartIcon />
                </IconButton>
            </CardActions>
        </Card>
  )
}

export default CardProduct
