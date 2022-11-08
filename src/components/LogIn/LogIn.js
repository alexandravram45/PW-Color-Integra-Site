import React, { useState } from 'react'
import './LogIn.css'
import { TextField, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';


const LogIn = () => {

  const [logInEmail, setLogInEmail] = useState('');
  const [logInPassword, setLogInPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(logInEmail, logInPassword)
      navigate('/contulMeu')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };

  return (
      <form onChange={handleSubmit}>
      <div className='logo-img'>
        <a href='/'>
            <img width={'150px'} src={require('../../images/SiglaPNG.png')} alt='Color Integra' />
        </a>
      </div>
      <div className='login-wrapper'>
        <h1 className='login-text'>Log In</h1>
        <TextField  
              fullWidth
              id="textfield" 
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
              id="textfield" 
              label="Parola" 
              variant="standard" 
              size='small'
              onChange={(event) => {
                setLogInPassword(event.target.value)
              }}
            
        />
        <p  className='question'><a href='../../signUp'>Don't have an account?</a></p>
        <Button 
              id='submit-button' 
              fullWidth 
              variant="contained"
            >
                Log In
        </Button>
      </div>
      </form>
  )
}

export default LogIn