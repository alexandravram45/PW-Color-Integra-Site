import { Card, Divider } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import SideMenu from "../components/SideMenu/SideMenu";
import './Home.css'
import CardProduct from "../components/Products/CardProduct";
import { database } from "../firebase"
import { collection, onSnapshot, query } from "firebase/firestore";
import Products from "../components/Products/Products";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

const Home = () => {

  const [productsList, setProductsList] = useState([])

  const storage = getStorage();
  const imageRef = ref(storage, 'images')

  //read from db
 
  useEffect(() => {
    const q = query(collection(database, "products"))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let prodArr = []
      querySnapshot.forEach((doc) => {
          prodArr.push({...doc.data(), id: doc.id})
      });
      setProductsList(prodArr)
    })
     return () => unsubscribe()
  }, []);

  return (
    <>
      <div className="container">
        <SideMenu />
        <div className="home-wrapper">
          <h1>Bine ai venit!</h1>
          <br></br>
          <Divider />
          <br></br>
          <h3>Produse noi {
            `(${productsList.length})`
          }</h3>
          <div className="products-wrapper">
            <Products data={productsList} /> 
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;