import React, { useEffect, useState } from "react";
import Products from "../components/Products/Products";
import { auth, database } from "../firebase";
import './Home.css'
import { collection, deleteDoc, doc, onSnapshot, query } from "firebase/firestore";
import { UserAuth } from '../context/AuthContext';
import { Button, Divider } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate } from 'react-router-dom';

const CosulMeu = () => {

const [basketList, setBasketList] = useState([])
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
  if (userID){
    const q = query(collection(database, `${userID}-basket`))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
    let prodArr = []
    querySnapshot.forEach((doc) => {
      console.log(doc.data())
      prodArr.push({...doc.data(), id: doc.id})
    });
    setBasketList(prodArr)
  })
  return () => unsubscribe()
  }
 
}, []);

console.log(basketList)

const getTotal = () => {
  let sum = 0
  basketList.map((product) => {
    sum = sum + parseInt(product.price, 10)
  })
  return sum
}

const handleSubmit = () => {
  try{
    navigate('/checkout', {state: {basketList: basketList, sum: getTotal()}})
  } catch(e){
    console.log(e.message)
  }
}

  return (
    <form onSubmit={handleSubmit}>
        <div className='logo-img'>
        <a href='/'>
            <img width={'150px'} src={require('../images/SiglaPNG.png')} alt='Color Integra' />
        </a>
      
      </div>
      <div className='basket-wrapper'>
        <h1>Cosul meu</h1>
        {!(user) ? <p>Nu esti logat. Logheaza-te pentru a putea adauga produse in cos.</p> :
        <div className="products-wrapper">
            { basketList.length === 0 ? <p>Nu ai niciun produs in cos.</p> : 
              <div style={{width: "100%"}}>
              <table style={{borderCollapse: "collapse", width: "100%"}}>
                <tr>
                  <th></th>
                  <th>Produs</th>
                  <th>Pret</th>
                </tr>
                {basketList.map((val) => {
                  return(
                    <tr > 
                    <td><img src={val.image} style={{height: "70px"}} /></td>
                    <td>{val.title}</td>
                    <td>{val.price + " RON"}</td>
                    <td>
                      <DeleteIcon 
                        onClick={ async () => {
                          const userID = getUser()
                          await deleteDoc(doc(database, `${userID}-basket`, `${val.id}`))
                        }} 
                        sx={{ "&:hover": { color: "red" } }}/>
                    </td>
                  </tr>
                  )
                  
                })}
              </table>
               <Divider />
               <br></br>
            <span style={{fontWeight: "bold"}}>Total: {getTotal()} RON</span>
            <Button fullWidth id='submit-button' variant="contained" type='submit' >Continua spre Checkout</Button>
            </div>
              }
           
        </div> }
         
      </div>
    </form>
  )
}

export default CosulMeu
