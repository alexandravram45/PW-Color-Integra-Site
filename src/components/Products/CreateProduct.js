import { TextField, Button } from "@mui/material";
import './ProductsStyle.css'
import * as React from 'react';
import { useState } from "react";
import { Select, Box, MenuItem, FormControl, InputLabel, OutlinedInput} from '@mui/material'


const CreateProduct = ({data, setData}) => {

const [newPostTitle, setNewPostTitle] = useState("");
const [category, setCategory] = React.useState('');
const [newImage, setNewImage] = useState("");

const addNewPost = () => {
    console.log(data);
    if (newPostTitle && newPostTitle.length > 0) {
        setData([...data, {
            title: newPostTitle,
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices lacinia vehicula. In vel feugiat nibh. Suspendisse faucibus, magna vitae fermentum pulvinar, elit sapien elementum turpis, at pretium leo enim quis purus.`,
            image: newImage
        }]);
        setNewPostTitle("");
    }
    else {
        alert("Post title should not be empty!");
    }
}

  return (
    <div className="add-product-wrapper">
      <h1>Create a new Product</h1>
				<TextField
					id="new-post-field"
					label="Product name"
					variant="outlined"
					value={newPostTitle}
					onChange={(e) => setNewPostTitle(e.target.value)}
                    style={{display: 'flex'}}
				/>
        <TextField label="Price"></TextField>
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
                    onChange={(e) => {
                      setCategory(e.target.value)
                    }}
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
                  multiline
                  rows={4}
          >
          </TextField>
				<Button variant="contained" sx={{ mb: 5 }} onClick={addNewPost}>
					Add Product
				</Button>
    </div>
  )
}

export default CreateProduct
