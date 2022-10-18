import React from 'react'
import './LogIn.css'

const LogIn = () => {
  return (
    <>
      <div className='logo-img'>
        <a href='/'>
            <img width={'150px'} src={require('../../images/SiglaPNG.png')} alt='Color Integra' />
        </a>
      </div>
      <div className='login-wrapper'>
        <h1 className='login-text'>Log In</h1>
        <label>
          <p className='label-style'>Username</p>
          <input type="text" className='username'></input>
        </label>
        <label>
          <p className='label-style'>Password</p>
          <input type="password" className='password'></input>
        </label>
        <br></br>
        <br></br>
        <a className='question' href='/components/SignUp'>Don't have an account?</a>
        <div>
          <a href='/'>
            <button type='submit' className='submitButton'>Submit</button>
          </a>
        </div>
      </div> 
    </>
  )
}

export default LogIn