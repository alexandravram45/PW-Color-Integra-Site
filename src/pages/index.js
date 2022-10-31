import { Divider } from "@mui/material";
import React from "react";
import Products from "../components/Products/Products";
import SideMenu from "../components/SideMenu/SideMenu";
import './Home.css'

const Home = () => {

  const initialData = [
    {
      title: "Pix",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices lacinia vehicula. In vel feugiat nibh. Suspendisse faucibus, magna vitae fermentum pulvinar, elit sapien elementum turpis, at pretium leo enim quis purus.`,
      image: '../images/pen.jpg'
    },
    {
      title: "Creion",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices lacinia vehicula. In vel feugiat nibh. Suspendisse faucibus, magna vitae fermentum pulvinar, elit sapien elementum turpis, at pretium leo enim quis purus.`,
      image: '../../images/pencil.jpg'
    },
    {
      title: "Hartie A4",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultrices lacinia vehicula. In vel feugiat nibh. Suspendisse faucibus, magna vitae fermentum pulvinar, elit sapien elementum turpis, at pretium leo enim quis purus.`,
      image: '../../images/paper.jpg'
    },
  ];
  

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
          <Products data={initialData} />
        </div>
      </div>
    </>
  );
}
export default Home;