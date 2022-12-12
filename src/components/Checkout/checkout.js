import React, { useState } from 'react'
import './checkout.css'
import { TextField, Button } from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import { auth } from '../../firebase';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const Checkout = () => {

  const [name, setName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [tel, setTel] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [judet, setJudet] = useState('');

  const [checkedCash, setCheckedCash] = useState(false);
  const [checkedCard, setCheckedCard] = useState(false);

  const location = useLocation()
  const { user, signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try { 
      console.log(auth.currentUser)
      
    } catch (e) {
      console.log(e.message)
     
    }
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
      </form>
  )
}

export default Checkout