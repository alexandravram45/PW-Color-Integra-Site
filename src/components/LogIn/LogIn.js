import React, { useState } from 'react'
import './LogIn.css'
import { TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';
import { auth } from '../../firebase';

const LogIn = () => {

  const [logInEmail, setLogInEmail] = useState('');
  const [logInPassword, setLogInPassword] = useState('');

  const navigate = useNavigate();
  const { user, signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try { 
      console.log(auth.currentUser)
      await signIn(logInEmail, logInPassword);
      navigate('/contulMeu')
    } catch (e) {
      console.log(e.message)
      if (e.code === 'auth/user-not-found' || e.code ==='auth/invalid-email'){
        document.querySelector('.error').innerHTML = "Invalid email address!";
      }
      if (e.code === 'auth/wrong-password'){
        document.querySelector('.error').innerHTML = "Wrong password!";
      }
    }
  };

  return (
       <form onSubmit={handleSubmit}>
      <div className='logo-img'>
        <a href='/'>
            <img width={'150px'} src={require('../../images/SiglaPNG.png')} alt='Color Integra' />
        </a>
      </div>
      <div className='login-wrapper'>
        {auth.currentUser ? "Esti logat ca: " + `${user.email}` : <div>
        <h1 className='login-text'>Log In</h1>
        <TextField  
              fullWidth
              id="email" 
              label="email" 
              variant="standard" 
              size='small'
              name='email'
              type='email'
              onChange={(event) => {
                setLogInEmail(event.target.value)
              }}
             
        />
        <TextField 
              fullWidth
              type="password"
              id="password" 
              label="Parola" 
              variant="standard" 
              size='small'
              onChange={(event) => {
                setLogInPassword(event.target.value)
              }}
            
        />
         <p className='error' style={{color: "red"}}></p> 
        <p  className='question'><a href='../../signUp'>Don't have an account?</a></p>
        <Button 
              id='submit-button' 
              fullWidth 
              variant="contained"
              type='submit'
            >
                Log In
        </Button>
        
      </div>}
      </div>
      </form>
  )
}

export default LogIn