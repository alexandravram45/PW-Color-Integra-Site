import { Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import SideMenu from "../components/SideMenu/SideMenu";
import './Home.css'
import { database } from "../firebase"
import { collection, onSnapshot, query } from "firebase/firestore";
import Products from "../components/Products/Products";
import Footer from "../components/Footer/Footer";

const Home = () => {

  const [productsList, setProductsList] = useState([])

  //read from db
 
  useEffect(() => {
    const q = query(collection(database, "products"))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let prodArr = []
      let i = 1
      querySnapshot.forEach((doc) => {
        if (i <= 10){
          prodArr.push({...doc.data(), id: doc.id})
        }
        i++
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
          <div className="hero-image-home">
            <div className="hero-text">
              Exploreaza produsele din gamele <b>Papetarie si Birotica</b> pentru un maxim de productivitate.
              <br />
              <br />
              Inspiratia vine cand te astepti mai putin! Exploreaza gama <b>Craft</b> si da viata ideilor tale.
              <br />
              <br />
              Beneficiaza de livrare rapida si retur gratuit.
            </div>
          </div>
          <br />
          <br />
          <h3>Produse noi {
            `(${productsList.length})`
          }</h3>
          <div className="products-wrapper">
            <Products data={productsList} /> 
          </div>
        </div>
       
      </div>
      <Footer />
    </>
  );
}
export default Home;