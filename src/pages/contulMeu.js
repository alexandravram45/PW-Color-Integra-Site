import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { Button } from '@mui/material'
import './contulMeu.css'


const ContulMeu = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div>
        <div className='logo-img'>
        <a href='/'>
            <img width={'150px'} src={require('../images/SiglaPNG.png')} alt='Color Integra' />
        </a>
      </div>
      <div className='account-wrapper'>
        <h1>Contul Meu</h1>
        <p>{user && user.email ? "Esti logat ca: " + `${user.email}` : "Momentan nu esti logat"}</p>
        {user && user.email ? <p  className='question'><a href='/orders'>Comenzile mele</a></p> : null}
        <h4>Nu ai cont Color Integra?</h4>
        <Button id='submit-button' type='submit' variant="contained" href='/signUp'>
            Sign Up
        </Button>
        <h4>Intra in cont</h4>
        <Button id='submit-button' type='submit' variant="contained" href='/logIn'>
            Log In
        </Button>
        {user && user.email ?
        <Button id='submit-button' type='submit' variant="contained" onClick={handleLogout}>
            Log out
        </Button> : null }
      </div>
    </div>
  );
};

export default ContulMeu;