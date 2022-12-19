import React, { useEffect, useState } from "react";
import { auth, database } from "../firebase";
import './Home.css'
import { collection, onSnapshot, query } from "firebase/firestore";
import { UserAuth } from '../context/AuthContext';
import { Divider } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import SideMenu from "../components/SideMenu/SideMenu";

const Orders = () => {

    const [orders, setOrders] = useState([])
    const { user } = UserAuth()
    const navigate = useNavigate();
    
    const getUser = () => {
       if (auth.currentUser){
        const userID = auth.currentUser.uid
        console.log(userID)
        return userID
      }
      else{
        console.log("not logged")
        return null
      }
    }
   
    //read from db
    useEffect(() => {
      const userID = getUser()
      console.log(userID)
        const q = query(collection(database, `${userID}-orders`))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
         let prodArr = []
        querySnapshot.forEach((doc) => {
          console.log(doc.data())
          prodArr.push({...doc.data(), id: doc.id})
        })
        setOrders(prodArr);
      
      })
      return () => unsubscribe()
     }, [orders])
     
   
    
    console.log(orders)

  return (
    <>
    <div className="container">
      <SideMenu />
      <div className="home-wrapper">
        <h1>Comenzile mele</h1>
        <br></br>
        <Divider />
        <br></br>
        <ul>
        {orders?.map((val) => { 
         
          return(
            <li>
              <b>Numarul comenzii: {val.orderNumber}</b>
              <br></br>
              Status: {val.status}
              <br></br>
              Suma: {val.sum} RON 
              <br />
              <br />
            </li>
          )
          })}
        </ul>
      </div>
    </div>
  </>
  )
}

export default Orders
