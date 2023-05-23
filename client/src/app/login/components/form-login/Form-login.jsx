'use client'
import React from 'react'
import FormSubmitLogin from './Form-submit-login'

const FormLogin = () => {

  return (
    <div className='login-cont'>
      <h2>Inicia sesión</h2>
      <FormSubmitLogin />
      <div className='register-option'>
        <p>¿Aún no tienes cuenta?</p>  
        <span>Registrate</span>
      </div>
    </div> 
  )
}

export default FormLogin
