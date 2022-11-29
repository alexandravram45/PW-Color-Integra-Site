import { Divider } from "@mui/material";
import { onValue } from "firebase/database";
import React, { useEffect, useState } from "react";
import Products from "../components/Products/Products";
import SideMenu from "../components/SideMenu/SideMenu";
import { auth, database } from "../firebase";
import { ref } from 'firebase/database';
import './Home.css'
import { collection, onSnapshot, query } from "firebase/firestore";

const Favorite = () => {

const [favoritesList, setFavoritesList] = useState([])

//read from db
useEffect(() => {
  const q = query(collection(database, "favorites"))
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    let prodArr = []
    querySnapshot.forEach((doc) => {
      console.log(doc.data())
      prodArr.push({...doc.data(), id: doc.id})
    });
    setFavoritesList(prodArr)
  })
  return () => unsubscribe()
}, []);

console.log(favoritesList)

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
