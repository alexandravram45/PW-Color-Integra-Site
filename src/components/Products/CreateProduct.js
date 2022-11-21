import { TextField, Button } from "@mui/material";
import './ProductsStyle.css'
import * as React from 'react';
import { useState, useEffect } from "react";
import { Select, Box, MenuItem, FormControl, InputLabel, OutlinedInput} from '@mui/material'
import { set, ref } from "firebase/database"
import { database } from "../../firebase"
import { uid } from "uid"

const CreateProduct = ({data, setData}) => {

const [newProductName, setNewProductName] = useState("");
const [newPrice, setNewPrice] = useState("");
const [newImage, setNewImage] = useState("");
const [category, setCategory] = useState("");
const [description, setDescription] = useState("");

function writePostToDatabase() {
  const postUid = uid()
  set(ref(database, `/${postUid}`), {
    newProductName,
    newPrice,
    newImage,
    category,
    description
  });
}

const addNewPost = () => {
    console.log(data);
    if (newProductName && newProductName.length > 0 && newPrice && newPrice.length > 0) {
        setData([...data, {
            title: newProductName,
            price: newPrice,
            image: newImage,
            category: category,
            content: description
        }]);
        writePostToDatabase();
        setNewProductName("");
        setNewPrice("");
        setNewImage("");
        setCategory("");
        setDescription("");
    }
    else {
        alert("Post title should not be empty!");
    }
}

  return (
    <form onSubmit={addNewPost} className="addProduct">
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
            value={newImage}
					  onChange={(e) => setNewImage(e.target.value)}
            style={{display: 'flex'}} />
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
                  <MenuItem value={10}>Birotica</MenuItem>
                  <MenuItem value={20}>Papetarie</MenuItem>
                  <MenuItem value={30}>Craft</MenuItem>
                  <MenuItem value={40}>Cartuse</MenuItem>
                  <MenuItem value={50}>Jucarii</MenuItem>
                  <MenuItem value={60}>Party</MenuItem>
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
				<Button variant="contained" sx={{ mb: 5 }} type="submit">
					Add Product
				</Button>
    </div>
    </form>
  )
}

export default CreateProduct
