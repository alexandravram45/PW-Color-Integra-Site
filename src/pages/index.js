import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import Products from "../components/Products/Products";
import SideMenu from "../components/SideMenu/SideMenu";
import { useLocation } from "react-router-dom"
import './Home.css'
import CardProduct from "../components/Products/CardProduct";
import database from "../firebase"
import { get, onValue, ref } from "firebase/database";
import { ref as sRef} from 'firebase/storage'
import { uid } from "uid"

const Home = () => {

  const location = useLocation()
  console.log(location.state)


  // useEffect(() => {
  //   onValue(sRef(database, "products"), (snapshot) => {
  //     setProductsList([]);
  //     const data = snapshot.val();
  //     if (data !== null) {
  //       Object.values(data).map((prod) => {
  //         setProductsList((oldArray) => [...oldArray, prod]);
  //       });
  //     }
  //   });
  // }, []);

  return (
    <>
      <div className="container">
        <SideMenu />
        <div className="home-wrapper">
          <h1>Bine ai venit!</h1>
          <br></br>
          <Divider />
          <br></br>
          <h3>Produse noi</h3>
          <div className="products-wrapper">
            
            <CardProduct title={location.state.title} price={location.state.price} image={location.state.image} category={location.state.category} content={location.state.content}/>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;