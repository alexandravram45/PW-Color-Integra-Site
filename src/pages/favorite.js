import { Divider } from "@mui/material";
import { onValue } from "firebase/database";
import React, { useEffect, useState } from "react";
import Products from "../components/Products/Products";
import SideMenu from "../components/SideMenu/SideMenu";
import { auth, database } from "../firebase";
import { ref } from 'firebase/database';
import './Home.css'

const Favorite = () => {

  
const initialData = [
  {
    title: "Pix",
    price: "2",
    image: "./pen.jpg",
    category: "Birotica",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
  },
  {
    title: "Pix",
    price: "3",
    image: "./pen.jpg",
    category: "Birotica",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
  },
  {
    title: "Pix",
    price: "2",
    image: "./pen.jpg",
    category: "Birotica",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
  },
  {
    title: "Pix",
    price: "2",
    image: "./pen.jpg",
    category: "Birotica",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
  },
  {
    title: "Pix",
    price: "2",
    image: "./pen.jpg",
    category: "Birotica",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
  },
  {
    title: "Pix",
    price: "2",
    image: "./pen.jpg",
    category: "Birotica",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
  },
  {
    title: "Pix",
    price: "2",
    image: "./pen.jpg",
    category: "Birotica",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
  },
  {
    title: "Pix",
    price: "2",
    image: "./pen.jpg",
    category: "Birotica",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
  },
  {
    title: "Pix",
    price: "2",
    image: "./pen.jpg",
    category: "Birotica",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
  },
];

const [favoritesList, setFavoritesList] = useState([])

useEffect(() => {
  try{
    const userId = auth.currentUser.uid
    console.log(userId)
    onValue(ref(database, `favorites/${userId}`), (snapshot) => {
      setFavoritesList([])
      const data = snapshot.val()
      if (data !== null){
        Object.values(data).map((prod) => {
          setFavoritesList((oldArray) => [...oldArray, prod]);
        })
      }
    })
  }catch(e){
    console.log(e)
  }
  
}, [])

  return (
    <>
    <div className="container">
      <SideMenu />
      <div className="home-wrapper">
        <h1>Lista mea de favorite</h1>
        <br></br>
        <Divider />
        <br></br>
        <div className="products-wrapper">
          <Products data={favoritesList} />
        </div>
      </div>
    </div>
  </>
  )
}

export default Favorite
