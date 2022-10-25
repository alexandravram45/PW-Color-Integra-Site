import React from 'react'
import './LogIn.css'
import { TextField, Button } from '@mui/material'
import { styled } from '@mui/material/styles';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const ColorButton = styled(Button)({
  backgroundColor: '#e8e8e8 ',
  marginTop: '50px',
  borderRadius: '20px',
  color: 'black',

  '&:hover': {
    backgroundColor: '#dedede'
  },
  '&:active': {
    backgroundColor: '#dedede'
  }
  
});

const initialValues = {
  name: "",
  age: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const LogIn = () => {
  return (
    <>
    <Formik
       initialValues={{
         email: ''
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
        <Form>
      <div className='logo-img'>
        <a href='/'>
            <img width={'150px'} src={require('../../images/SiglaPNG.png')} alt='Color Integra' />
        </a>
      </div>
      <div className='login-wrapper'>
        <h1 className='login-text'>Log In</h1>
        <p className='label-title' >Adresa de email</p>
        <TextField  
              fullWidth
              id="textfield" 
              label="email" 
              variant="outlined" 
              size='small'
              color='secondary'
              name='email'
              type='email'
        />
        {errors.email && touched.email ? <div>{errors.email}</div> : null}
          
        <p className='label-title' >Parola</p>
        <TextField 
              fullWidth
              type="password"
              id="textfield" 
              label="Parola" 
              variant="outlined" 
              size='small'
              color='secondary'
        />
        <p  className='question'><a href='../../signUp'>Don't have an account?</a></p>
        <ColorButton fullWidth variant="contained" href='/'>Continua</ColorButton>
      </div>
      </Form>
       )}
       </Formik>
    </>
  )
}

export default LogIn