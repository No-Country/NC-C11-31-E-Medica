import React from 'react'
import { useForm } from 'react-hook-form'

const FormLogin = () => {
  return (
  <form>
    <input 
    name='e-mail'
    type='text'
    placeholder='Ingresa tu e-mail'
    />
    <input 
    name='password'
    type='password'
    placeholder='Ingresa tu e-mail'
    />
    <button>Ingresar</button>
  </form>
  )
}

export default FormLogin
