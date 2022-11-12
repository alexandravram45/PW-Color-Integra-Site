import { Divider } from "@mui/material";
import React, { useState } from "react";
import Products from "../components/Products/Products";
import SideMenu from "../components/SideMenu/SideMenu";
import './Home.css'

// const initialData = [
//   {
//     title: "Pix",
//     price: "2",
//     image: "./pen.jpg",
//     category: "Birotica",
//     content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices lacinia vehicula. In vel feugiat nibh. Suspendisse faucibus, magna vitae fermentum pulvinar, elit sapien elementum turpis, at pretium leo enim quis purus.`
//   },
//   {
//     title: "Pix",
//     price: "3",
//     image: "./pen.jpg",
//     category: "Birotica",
//     content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices lacinia vehicula. In vel feugiat nibh. Suspendisse faucibus, magna vitae fermentum pulvinar, elit sapien elementum turpis, at pretium leo enim quis purus.`
//   },
//   {
//     title: "Pix",
//     price: "2",
//     image: "./pen.jpg",
//     category: "Birotica",
//     content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices lacinia vehicula. In vel feugiat nibh. Suspendisse faucibus, magna vitae fermentum pulvinar, elit sapien elementum turpis, at pretium leo enim quis purus.`
//   },
// ];

const Home = () => {

  const [data, setData] = useState([]);

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
				  <Products data={data} />
        </div>
      </div>
    </>
  );
}
export default Home;