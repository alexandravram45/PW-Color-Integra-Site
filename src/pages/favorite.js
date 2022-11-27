import { Divider } from "@mui/material";
import React, { useState } from "react";
import Products from "../components/Products/Products";
import SideMenu from "../components/SideMenu/SideMenu";
import './Home.css'

const Favorite = () => {

  
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

  return (
    <>
    <div className="container">
      <SideMenu />
      <div className="home-wrapper">
        <h1>Lista mea de favorite</h1>
        <br></br>
        <Divider />
        <br></br>
        <div className="products-wrapper">
          <Products data={initialData} />
        </div>
      </div>
    </div>
  </>
  )
}

export default Favorite
