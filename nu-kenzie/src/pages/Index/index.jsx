import React from 'react'
import logo from './../../img/logo.png'
import illustration from "./../../img/illustration.svg"


const index = ( {setLogin} ) => {
  return (
    <div className='mainContainer'>
      <div className='left-container'>
        <img src={logo} alt="logo" />
        <h1>Centralize o controle das suas finanças</h1>
        <p>de forma rápida e segura</p>
        <button type='button' onClick={() => setLogin(!true)}>Iniciar</button>
      </div>
      <div className="indexRightContainer">
        <img src={illustration} alt="NAOACHEIAMERDADAIMAGEM" />
      </div>
    </div>
  )
}

export default index