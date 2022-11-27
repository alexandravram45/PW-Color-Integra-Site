import React from 'react'
import './contulMeu.css'

const CosulMeu = () => {

  return (
    <div>
        <div className='logo-img'>
        <a href='/'>
            <img width={'150px'} src={require('../images/SiglaPNG.png')} alt='Color Integra' />
        </a>
      </div>
      <div className='basket-wrapper'>
        <h1>Cosul meu</h1>
        
      </div>
    </div>
  )
}

export default CosulMeu
