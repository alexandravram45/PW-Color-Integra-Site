import { Card, Divider } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import SideMenu from "../components/SideMenu/SideMenu";
import './Home.css'
import CardProduct from "../components/Products/CardProduct";
import { database } from "../firebase"
import { collection, onSnapshot, query } from "firebase/firestore";
import Products from "../components/Products/Products";
import { getStorage, ref, listAll } from "firebase/storage";

const Home = () => {

  const [productsList, setProductsList] = useState([])
  const image = useRef();
  const storage = getStorage();
  const imageRef = ref(storage, 'images')

  useEffect(() => {
    const q = query(collection(database, "products"))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let prodArr = []
      querySnapshot.forEach((doc) => {
        prodArr.push({...doc.data(), id: doc.id})
        listAll(imageRef).then((res) => {
          res.items.filter((itemRef) => {
            console.log(itemRef.name)
            itemRef.name.includes(doc.id)
            image.current = itemRef.name 
            console.log(prodArr[prodArr.length - 1].image)
            prodArr[prodArr.length - 1].image = image.current
           
            console.log(image.current)
          })
        }).catch((err) => {
          console.log(err)
        })
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