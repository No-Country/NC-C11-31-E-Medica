'use client'
import React from 'react'
import FormSubmitLogin from './Form-submit-login'

const FormLogin = () => {

  return (
    <div className='login-form'>
      <h2>Te damos la bienvenida</h2>
      <p>Ingresa tus datos para agendar tus turnos</p>
      <FormSubmitLogin />
      <div className='register-option'>
        <p>¿Aún no tienes cuenta?</p>  
        <a href='/register'>Registrate</a>
      </div>
    </div> 
  )
}

export default FormLogin
