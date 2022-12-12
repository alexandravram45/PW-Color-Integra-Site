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

const getUser = () => {
   if (auth.currentUser){
    const userID = auth.currentUser.uid
    console.log(userID)
    return userID
  }
  else{
    console.log("not logged")
    return null
  }
}

//read from db
useEffect(() => {
  const userID = getUser()
  console.log(userID)
  if (userID){
    const q = query(collection(database, `${userID}-favorites`))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
    let prodArr = []
    querySnapshot.forEach((doc) => {
      console.log(doc.data())
      prodArr.push({...doc.data(), id: doc.id})
    });
    setFavoritesList(prodArr)
  })
  return () => unsubscribe()
  }
 
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
        {!(auth.currentUser) ? <p>Nu esti logat. Logheaza-te pentru a putea adauga produse favorite.</p> :
        <div className="products-wrapper">
          <Products data={favoritesList} />
        </div> }
      </div>
    </div>
  </>
  )
}

export default Favorite
