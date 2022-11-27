import React, { useState} from 'react'
import '../LogIn/LogIn.css'
import { TextField, Button } from '@mui/material'
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from '../../context/AuthContext';
import { FirebaseError } from 'firebase/app';

const validationSchema = yup.object().shape({
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
  const [error, setError] = useState('')
  const { createUser } = UserAuth();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    //e.preventDefault();
    setError('');
    try {
      await createUser(signUpEmail, signUpPassword);
      navigate('/contulMeu')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
      document.querySelector('.error').innerHTML = error;
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: validationSchema,
    onSubmit: handleSubmit
  });

 
    return (
    <div>
    <form onSubmit={formik.handleSubmit}>
      <div className='logo-img'>
        <a href='/'>
            <img width={'150px'} src={require('../../images/SiglaPNG.png')} alt='Color Integra' />
        </a>
      </div>
      <div className='signup-wrapper'>
        <h3 className='login-text'>Nu ai cont Color Integra?<br />Hai sa iti cream unul nou!</h3>
        <TextField  
              fullWidth
              id="email" 
              label="Adresa de email"
              name='email' 
              type='email'
              variant="standard"
              size='small'
              onChange={(e) => {setSignUpEmail(e.target.value); formik.handleChange(e)}}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
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
              onChange={(event) => {setSignUpPassword(event.target.value); formik.handleChange(event)}}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}

        />
         <TextField 
              fullWidth
              type="password"
              id="confirmPassword" 
              label="Confirma Parola" 
              name='confirmPassword'
              variant="standard"
              size='small'
              margin="normal"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
              helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
        />
        <p className='error' style={{color: "red"}}></p> 
         <div>
          Already have an account? <Link to="/logIn">Login</Link> now.
        </div>
        <Button fullWidth id='submit-button' type='submit' variant="contained" >Continua</Button>
      </div> 
    </form>
    </div>
)}

export default SignUp
