import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import SideMenu from "../components/SideMenu/SideMenu";
import './Home.css'
import { database } from "../firebase"
import { collection, onSnapshot, query } from "firebase/firestore";
import Products from "../components/Products/Products";

const Reduceri = () => {

  const [productsList, setProductsList] = useState([])

  //read from db
 
//   useEffect(() => {
//     const q = query(collection(database, "products"))
//     const unsubscribe = onSnapshot(q, (querySnapshot) => {
//       let prodArr = []
//       querySnapshot.forEach((doc) => {
//         if (doc.data())
//         prodArr.push({...doc.data(), id: doc.id})
//       });
//       setProductsList(prodArr)
//     })
//      return () => unsubscribe()
//   }, []);

  return (
    <>
      <div className="container">
        <SideMenu />
        <div className="home-wrapper">
          <h1>Christmas sale </h1>
          <br></br>
          <Divider />
          <br></br>
          <div className="hero-image-reduceri"></div>
          <br></br>
          <p>Beneficiaza de livrare rapida si retur gratuit</p>
          <div className="products-wrapper">
            <Products data={productsList} /> 
          </div>
        </div>
      </div>
    </>
  );
}
export default Reduceri;