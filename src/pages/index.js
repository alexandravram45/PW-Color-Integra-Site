import { Divider } from "@mui/material";
import React, { useState } from "react";
import Products from "../components/Products/Products";
import SideMenu from "../components/SideMenu/SideMenu";
import './Home.css'

const initialData = [
  {
    title: "Pix",
    price: "2",
    image: "./pen.jpg",
    category: "Birotica",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
  },
  {
    title: "Pix",
    price: "3",
    image: "./pen.jpg",
    category: "Birotica",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
  },
  {
    title: "Pix",
    price: "2",
    image: "./pen.jpg",
    category: "Birotica",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
  },
  {
    title: "Pix",
    price: "2",
    image: "./pen.jpg",
    category: "Birotica",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
  },
  {
    title: "Pix",
    price: "2",
    image: "./pen.jpg",
    category: "Birotica",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
  },
  {
    title: "Pix",
    price: "2",
    image: "./pen.jpg",
    category: "Birotica",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
  },
  {
    title: "Pix",
    price: "2",
    image: "./pen.jpg",
    category: "Birotica",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
  },
  {
    title: "Pix",
    price: "2",
    image: "./pen.jpg",
    category: "Birotica",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
  },
  {
    title: "Pix",
    price: "2",
    image: "./pen.jpg",
    category: "Birotica",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
  },
];

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
          <div className="products-wrapper">
				    <Products data={initialData} />
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;