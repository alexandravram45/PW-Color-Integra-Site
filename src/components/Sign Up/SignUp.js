import React from 'react'
import '../LogIn/LogIn.css'
import { TextField, Button, FormHelperText } from '@mui/material'
import { styled } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as yup from 'yup';


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

const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required("A name is required")
      .min(2, "Name must be at least 2 characters"),
    secondName: yup
      .string()
      .required("A name is required")
      .min(2, "Name must be at least 2 characters"),
    email: yup
      .string()
      .email()
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

const SignUp = ({onSubmit}) => {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit
     });

    const nameProps = formik.getFieldProps("name");
    const secondNameProps = formik.getFieldProps("secondName");
    const emailProps = formik.getFieldProps("email");
    const passwordProps = formik.getFieldProps("password");
    const confirmPasswordProps = formik.getFieldProps("confirmPassword");

    return (
    <>
    <form onSubmit={formik.handleSubmit}>
      <div className='logo-img'>
        <a href='/'>
            <img width={'150px'} src={require('../../images/SiglaPNG.png')} alt='Color Integra' />
        </a>
      </div>
      <div className='signup-wrapper'>
        <h3 className='login-text'>Nu ai cont Color Integra?<br />Hai sa iti cream unul nou!</h3>
        <p className='label-title' >Nume</p>
        <TextField  
              fullWidth
              required
              id="textfield" 
              label="nume" 
              variant="outlined" 
              size='small'
              color='secondary'
              {...nameProps}
        />
        {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
        ) : null}
        <p className='label-title' >Prenume</p>
        <TextField  
              fullWidth
              required
              id="textfield" 
              label="prenume" 
              variant="outlined" 
              size='small'
              color='secondary'
              {...secondNameProps}
        />
        {formik.touched.secondName && formik.errors.secondName ? (
            <div>{formik.errors.age}</div>
        ) : null}
        <p className='label-title' >Adresa de email</p>
        <TextField  
              fullWidth
              required
              id="textfield" 
              label="email" 
              variant="outlined" 
              size='small'
              color='secondary'
              {...emailProps}
        />
         {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
         ) : null}
        <p className='label-title' >Alege o parola sigura</p>
        <TextField 
              fullWidth
              required
              type="password"
              id="textfield" 
              label="Parola" 
              variant="outlined" 
              size='small'
              color='secondary'
              {...passwordProps}
        />
        {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
        ) : null}
         <p className='label-title' >Confirma parola</p>
        <TextField 
              fullWidth
              required
              type="password"
              id="textfield" 
              label="Parola" 
              variant="outlined" 
              size='small'
              color='secondary'
              {...confirmPasswordProps}
        />
         {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div>{formik.errors.confirmPassword}</div>
         ) : null}
        <ColorButton fullWidth id='submit-button' type='submit' variant="contained" href='/' disabled={!(formik.isValid && formik.dirty)}>Continua</ColorButton>
      </div> 
    </form>
    </>
)}

export default SignUp