import React from 'react'

const CosulMeu = ({ setShowSideMenu }) => {

  setShowSideMenu(true)

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1>Cosul meu</h1>
    </div>
  )
}

export default CosulMeu
