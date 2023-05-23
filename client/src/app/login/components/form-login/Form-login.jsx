'use client'
import React from 'react'
import FormSubmitLogin from './Form-submit-login'

const FormLogin = () => {

  return (
    <div className='login-cont'>
      <h2>Te damos la bienvenida</h2>
      <p>Ingresa tus datos para poder agendar tus turnos</p>
      <FormSubmitLogin />
      <div className='register-option'>
        <p>¿Aún no tienes cuenta?</p>  
        <span>Registrate</span>
      </div>
    </div> 
  )
}

export default FormLogin
