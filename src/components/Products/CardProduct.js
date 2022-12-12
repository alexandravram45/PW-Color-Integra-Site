import React, { useEffect, useRef, useState } from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { database, auth } from "../../firebase"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { UserAuth } from '../../context/AuthContext';

const CardProduct = ({ product }) => {

    const [fav, setFav] = useState('#757575')
    const [clicks, setClicks] = useState(0)
    const { user } = UserAuth();

    useEffect(() => {
        if (product.favorites){
            setFav("red")
        }
    }, [])
    
    const addToFavorites = async (e) => {
        e.preventDefault(e);
        setClicks(clicks + 1)

        if (fav === "#757575" && clicks === 1){
            //write to db
            if (auth.currentUser){
                const userID = auth.currentUser.uid
                await addDoc(collection(database, `${userID}-favorites`), {
                title: product.title,
                price: product.price,
                image: product.image,
                category: product.category,
                content: product.content,
                favorites: true
            })
                setFav('red')
                toast.success('Produsul a fost adaugat cu succes!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
            else{
                toast.error('Trebuie sa fii logat pentru a adauga un produs favorit.', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
           
        } else if (fav === "red") {
            setFav("#757575")
            await deleteDoc(doc(database, "favorites", `${product.id}`))
        }
    }

    const addToBasket = async (e) => {
        e.preventDefault(e);

            //write to db
            if (auth.currentUser){
                const userID = auth.currentUser.uid
                await addDoc(collection(database, `${userID}-basket`), {
                title: product.title,
                price: product.price,
                image: product.image,
                category: product.category,
                content: product.content
            })
                
                toast.success('Produsul a fost adaugat cu succes!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
            else{
                toast.error('Trebuie sa fii logat pentru a adauga un produs in cos.', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
           
    }

    const deleteProduct = async () => {
        await deleteDoc(doc(database, 'products', `${product.id}`))
    }

  return (
    <Card sx={{ minWidth: 275, maxWidth: 275, margin: 1 }}>
            <a ><CardMedia
            component='img'
            image={product.image}
            height='200px'
            /></a>
            <CardContent >
                <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                 </Typography>
                 <Typography gutterBottom variant="h5" component="div">
                    {product.price + " RON"}
                 </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.content}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton onClick={addToFavorites} style={{ color: fav }} aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton onClick={addToBasket} aria-label="share">
                    <ShoppingCartIcon />
                </IconButton>
                { user && user.email === "colorintegra@yahoo.com" ?
                <IconButton onClick={deleteProduct} aria-label="share"  sx={{ "&:hover": { color: "red" } }}>
                    <DeleteIcon />
                </IconButton>
                : null
                }
                <ToastContainer
                />
            </CardActions>
        </Card>
  )
}

export default CardProduct