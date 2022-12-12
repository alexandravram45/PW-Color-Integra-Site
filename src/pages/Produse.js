import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import SideMenu from "../components/SideMenu/SideMenu";
import './Home.css'
import { database } from "../firebase"
import { collection, onSnapshot, query } from "firebase/firestore";
import Products from "../components/Products/Products";
import Footer from "../components/Footer/Footer";

const Produse = () => {

  const [productsList, setProductsList] = useState([])

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
          <h1>Toate produsele {
            `(${productsList.length})`
          }</h1>
          <br></br>
          <Divider />
          <br></br>
          <div className="products-wrapper">
            <Products data={productsList} /> 
          </div>
        </div>
      </div> 
      <Footer />
    </>
  );
}
export default Produse;