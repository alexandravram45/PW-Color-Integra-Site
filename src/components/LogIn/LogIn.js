import React, { useState } from 'react'
import './LogIn.css'
import { TextField, Button } from '@mui/material'
import { 
  signInWithEmailAndPassword,
  onAuthStateChanged} from "firebase/auth"
import { auth } from '../../firebase'

const LogIn = ({ setShowSideMenu }) => {

  setShowSideMenu(false)

  const [logInEmail, setLogInEmail] = useState("");
  const [logInPassword, setLogInPassword] = useState("");
  
  const [user, setUser] = useState({})

  const login = async () => {
    await signInWithEmailAndPassword(auth, logInEmail, logInPassword)
    .then((userCredential) => {
      // Signed in 
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage)
    });
  }

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser){
      setUser(currentUser);
    }
  })

  return (
      <form>
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
        {/* {errors.email && touched.email ? <div>{errors.email}</div> : null} */}
          
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
              onClick={login}
            >
                Log In
        </Button>
      </div>
      </form>
  )
}

export default LogIn