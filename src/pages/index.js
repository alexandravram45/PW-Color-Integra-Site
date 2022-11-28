import { Card, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import SideMenu from "../components/SideMenu/SideMenu";
import './Home.css'
import CardProduct from "../components/Products/CardProduct";
import { database } from "../firebase"
import { collection, onSnapshot, query } from "firebase/firestore";
import Products from "../components/Products/Products";

const Home = () => {

  const [productsList, setProductsList] = useState([])
  
  useEffect(() => {
    const q = query(collection(database, "products"))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let prodArr = []
      querySnapshot.forEach((doc) => {
        console.log(doc.data())
        prodArr.push({...doc.data(), id: doc.id})
      });
      setProductsList(prodArr)
    })
    return () => unsubscribe()
  }, []);

  console.log(productsList)
  

  return (
    <>
      <div className="container">
        <SideMenu />
        <div className="home-wrapper">
          <h1>Bine ai venit!</h1>
          <br></br>
          <Divider />
          <br></br>
          <h3>Produse noi {productsList.length < 1 ? null : (
            `(${productsList.length})`
          )}</h3>
          
          <div className="products-wrapper">
            <Products data={productsList} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;