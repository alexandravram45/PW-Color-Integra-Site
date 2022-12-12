import React, { useState } from 'react'
import './checkout.css'
import { TextField, Button } from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import { auth, database } from '../../firebase';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ToastContainer, toast } from 'react-toastify';
import { addDoc, collection, onSnapshot, query, deleteDoc } from "firebase/firestore";


const Checkout = () => {

  const [name, setName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [tel, setTel] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [judet, setJudet] = useState('');

  const [checkedCash, setCheckedCash] = useState(false);
  const [checkedCard, setCheckedCard] = useState(false);

  const [confirmed, setConfirmed] = useState(true)

  const location = useLocation()
  const navigate = useNavigate()

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

  const handleSubmit = async (e) => {
    e.preventDefault(e);
    const userID = getUser()
    const basket = location.state.basketList
    const sum = location.state.sum

    //write to db
    await addDoc(collection(database, `${userID}-orders`), {
      name,
      secondName,
      tel, 
      address,
      city,
      judet,
      basket,
      sum,
      checkedCard,
      checkedCash
    })

    setName("");
    setSecondName("");
    setTel("")
    setAddress("");
    setCity("");
    setJudet("");
    setCheckedCard(false);
    setCheckedCash(false);

   
    toast.success('Comanda a fost plasata cu succes', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
  });

   setConfirmed(true)

   //delete basket

   const q = query(collection(database, `${userID}-basket`))
    onSnapshot(q, (querySnapshot) => {
    querySnapshot.forEach(async (doc) => {
      await deleteDoc(doc(database, `${userID}-basket`, `${doc.id}`))
    });
  }) 
  
  setTimeout(() => {
      navigate("/")
    }, 3000);


  };

  return (
       <form onSubmit={handleSubmit}>
      <div className='logo-img'>
        <a href='/'>
            <img width={'150px'} src={require('../../images/SiglaPNG.png')} alt='Color Integra' />
        </a>
      </div>
     
      <div className='checkout-wrapper'>
        <h1 className='login-text'>Checkout</h1>
        <TextField  
              fullWidth
              required
              id="name" 
              label="Nume" 
              variant="standard" 
              size='small'
              name='name'
              type='name'
              value={name}
              onChange={(event) => {
                setName(event.target.value)
              }}
             
        />
        <TextField  
              fullWidth
              required
              id="secondName" 
              label="Prenume" 
              variant="standard" 
              size='small'
              name='secondName'
              value={secondName}
              onChange={(event) => {
                setSecondName(event.target.value)
              }}
             
        />
        <TextField  
              fullWidth
              required
              id="tel" 
              label="Telefon" 
              variant="standard" 
              size='small'
              name='tel'
              value={tel}
              onChange={(event) => {
                setTel(event.target.value)
              }}
             
        />
        <TextField  
              fullWidth
              required
              id="city" 
              label="Oras" 
              variant="standard" 
              size='small'
              name='city'
              value={city}
              onChange={(event) => {
                setCity(event.target.value)
              }}
             
        />
        <TextField  
              fullWidth
              required
              id="judet" 
              label="Judet" 
              variant="standard" 
              size='small'
              name='judet'
              value={judet}
              onChange={(event) => {
                setJudet(event.target.value)
              }}
             
        />
        <TextField  
              fullWidth
              required
              id="address" 
              label="Adresa" 
              variant="standard" 
              size='small'
              name='address'
              value={address}
              onChange={(event) => {
                setAddress(event.target.value)
              }}
             
        />
         <FormControlLabel 
            control={<Checkbox 
                checked={checkedCash}
                onChange={(event) => {
                    setCheckedCash(!checkedCash)
                }}
                inputProps={{ 'aria-label': 'controlled' }} />} 
            label="Cash" 
        />

         <FormControlLabel 
            control={<Checkbox 
                checked={checkedCard}
                onChange={(event) => {
                    setCheckedCard(!checkedCard)
                }}
                inputProps={{ 'aria-label': 'controlled' }} />} 
            label="Card" 
        />
        <div>
        {location.state?.basketList.map((val) => {
                  return(
                    <table style={{width: "100%", border: "1px solid #DCDCDC"}}>
                      <tr > 
                        <td><img src={val.image} style={{height: "70px"}} /></td>
                        <td>{val.title}</td>
                        <td>{val.price + " RON"}</td>
                      </tr>
                    </table>
                  )
                })}
                <br></br>
          <p><b>Total: {location.state?.sum} RON</b></p>
        </div>
        
         <p className='error' style={{color: "red"}}></p> 
        <Button 
              id='submit-button' 
              fullWidth 
              variant="contained"
              type='submit'
            >
                Trimite comanda
        </Button>
        </div>
      <ToastContainer />
      </form>
  )
}

export default Checkout