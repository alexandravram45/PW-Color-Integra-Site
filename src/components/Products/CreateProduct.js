import { TextField, Button } from "@mui/material";
import './ProductsStyle.css'
import * as React from 'react';
import { useState, useEffect } from "react";
import { Select, Box, MenuItem, FormControl, InputLabel, OutlinedInput} from '@mui/material'
import { database, storage } from "../../firebase"
import { useNavigate } from "react-router-dom";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid"
import { SettingsRemoteOutlined } from "@mui/icons-material";

const CreateProduct = () => {

const [newProductName, setNewProductName] = useState("");
const [newPrice, setNewPrice] = useState("");
const [newImage, setNewImage] = useState("");
const [category, setCategory] = useState("");
const [description, setDescription] = useState("");
let productId = ""

const navigate = useNavigate()

const addNewProduct = async (e) => {
    e.preventDefault(e);
    if (newProductName && newProductName.length <= 0 && newPrice && newPrice.length <= 0){
      alert("Post title and price should not be empty!");
      return
    }

    //write to db
    const { id } = await addDoc(collection(database, 'products'), {
      title: newProductName,
      price: newPrice,
      image: "",
      category: category,
      content: description,
    })
    console.log(id)
    productId = id

    uploadImage()
    
    setNewProductName("");
    setNewPrice("");
    setNewImage(null)
    setCategory("");
    setDescription("");

    navigate('/')
}

const uploadImage = async () => {
  if (newImage == null) return;
  const imageRef = ref(storage, `images/${newImage.name + productId}`);
  uploadBytes(imageRef, newImage).then(() => {
    listAll(ref(storage, 'images')).then((res) => {
      res.items.forEach((itemRef) => {
        console.log(itemRef.name)
        if (itemRef.name.includes(productId)){
          console.log(itemRef.name) //ajunge
          getDownloadURL(itemRef).then(async (urll) => {
            await updateDoc(doc(database, 'products', `${productId}`), {
              image: urll
            })
          })
        }
      })
    })
  })
}


  return (
    <form onSubmit={addNewProduct} className="addProduct">
    <div className="add-product-wrapper">
      <h1>Create a new Product</h1>
				<TextField
					id="productName"
					label="Product name"
					variant="outlined"
					value={newProductName}
					onChange={(e) => setNewProductName(e.target.value)}
          style={{display: 'flex'}}
				/>
        <TextField 
          id="productPrice"
          label="Price" 
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)} 
        />
          <OutlinedInput 
            type="file" 
            id="file-input" 
            name="ImageStyle"
					  onChange={(e) => setNewImage(e.target.files[0])}
            style={{display: 'flex'}} 
          />
          <Box sx={{ minWidth: 150 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Categorie</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="Categorie"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                  <MenuItem value={"Birotica"}>Birotica</MenuItem>
                  <MenuItem value={"Papetarie"}>Papetarie</MenuItem>
                  <MenuItem value={"Craft"}>Craft</MenuItem>
                  <MenuItem value={"Cartuse"}>Cartuse</MenuItem>
                  <MenuItem value={"Jucarii"}>Jucarii</MenuItem>
                  <MenuItem value={"Party"}>Party</MenuItem>
                </Select>
              </FormControl>
          </Box>
          <TextField 
                  label="Description" 
                  id="outlined-multiline-static"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  multiline
                  rows={4}
          >
          </TextField>
				<Button type='submit' variant="contained" sx={{ mb: 5 }}>
          Add product
				</Button>
    </div>
    </form>
  )
}

export default CreateProduct