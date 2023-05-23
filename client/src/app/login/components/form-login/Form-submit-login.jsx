import React from 'react'
import { useForm } from 'react-hook-form'

const FormSubmitLogin = () => {

    const{register, errors, handleSubmit} = useForm();

    const onSubmit = (data) =>{
      console.log(data)
    }

  return (
    <div>
        <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
        <div className='login-form-cont'>
          <label>Correo electrónico</label>
          <input
          name='email'
          type='email'
          placeholder='Ingrese su email'
          { ...register('email', { required: {value: true, message: 'Complete el campo de email'} }) }      
          />
          <span>{errors?.email?.message}</span>
        </div>
        <div className='login-form-cont'>
          <label>Contraseña</label>
          <input
          name='password'
          type='password'
          placeholder='Ingrese su contraseña'
          { ...register('password', { required: {value: true, message: 'Complete el campo de contraseña'} }) }      
          />
          <span className='errors'>{errors?.password?.message}</span>
        </div>
        <button>Ingresar</button>    
      </form>
    </div>
  )
}

export default FormSubmitLogin