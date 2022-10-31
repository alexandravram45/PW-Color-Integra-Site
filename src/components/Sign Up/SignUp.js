import React, { useState } from 'react'
import '../LogIn/LogIn.css'
import { TextField, Button } from '@mui/material'
import * as yup from 'yup';
import { Link } from "react-router-dom";
import { 
  createUserWithEmailAndPassword, 
  onAuthStateChanged,
  signOut} from 'firebase/auth';
import { auth } from '../../firebase'

const validationSchema = yup.object({
    name: yup
      .string()
      .required("A name is required")
      .min(2, "Name must be at least 2 characters"),
    secondName: yup
      .string()
      .required("A name is required")
      .min(2, "Name must be at least 2 characters"),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required("Email is a required field"),
    password: yup
      .string()
      .required("Please enter your password")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ),
    confirmPassword: yup
      .string()
      .required("Please confirm your password")
      .when("password", {
        is: password => (password && password.length > 0 ? true : false),
        then: yup.string().oneOf([yup.ref("password")], "Password doesn't match")
      })
  });


const SignUp = () => {

  const [signUpEmail, setSignUpEmail] = useState("")
  const [signUpPassword, setSignUpPassword] = useState("")
  
  const [user, setUser] = useState({})

  const signUp = async () => {
      await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
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

  const logout = async () => {
    await signOut(auth)
  }

    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser){
        setUser(currentUser);
      }
    })

    return (
    <div>
    <form >
      <div className='logo-img'>
        <a href='/'>
            <img width={'150px'} src={require('../../images/SiglaPNG.png')} alt='Color Integra' />
        </a>
      </div>
      <div className='signup-wrapper'>
        <h3 className='login-text'>Nu ai cont Color Integra?<br />Hai sa iti cream unul nou!</h3>
        
        <TextField  
              fullWidth
              id="name" 
              label="Nume" 
              name='name'
              type='name'
              variant="standard"
              size='small'
              margin="normal"
        />
        <TextField  
              fullWidth
              id="secondName" 
              label="Prenume" 
              name='secondName'
              type='secondName'
              variant="standard" 
              size='small'
              margin="normal"
        />
        <TextField  
              fullWidth
              id="email" 
              label="Adresa de email"
              name='email' 
              type='email'
              variant="standard"
              size='small'
              margin="normal"
              onChange={(event) => {setSignUpEmail(event.target.value)}}
        />
        <TextField 
              fullWidth
              type="password"
              id="password" 
              label="Parola" 
              name='password'
              variant="standard"
              size='small'
              margin="normal"
              onChange={(event) => {setSignUpPassword(event.target.value)}}

        />
        {/* <TextField 
              fullWidth
              type="confirmPassword"
              id="confirmPassword" 
              label="Confirma Parola" 
              name='confirmPassword'
              variant="standard"
              size='small'
              margin="normal"
              
    if (passwordRef.current.value !== confirmPasswordRef.current.value){
      return setError("Passwords do not match")
    }

        /> */}
         <div>
          Already have an account? <Link to="/logIn">Login</Link> now.
        </div>
        <Button fullWidth onClick={signUp} id='submit-button' type='submit' variant="contained" >Continua</Button>
        Logged in as: {}
        <Button type='submit' variant="contained" onClick={logout}>Log Out</Button>
      </div> 
    </form>
    </div>
)}

export default SignUp
