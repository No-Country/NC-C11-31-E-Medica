import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import FormInputLogin from './Form-input-login';

const FormSubmitLogin = () => {
  
  const[inputClassName, setInputClassName] = useState(true)

  const handlerChangeClassName = ()=> {
    setInputClassName(!inputClassName)
  }
  
  const{
    register,  
    formState: { errors },
    handleSubmit
  } = useForm();

  const onSubmit = (data) =>{
    console.log(data)
  }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`${inputClassName ? 'login-form-email-cont-true' : 'login-form-email-cont-false'}`}>
          <FormInputLogin 
          inputValue={{
            label: 'Correo electrónico',
            name: 'email',
            type: 'email',
            placeholder: 'juanperez@gmail.com'
          }}
          { ...register('email', { 
            required: {
              value: true, 
              message: 'Ingrese un email para continuar'
              } 
            }) 
          }/>
          {errors.email?.type === 'required' && (
          <span className='login-form-errors'> 
            {errors.email?.message}
          </span>
          )}
          <button type='submit' className='login-form-button-next' onClick={handlerChangeClassName}>Siguiente</button>
        </div>

        <div className={`${inputClassName ? 'login-form-password-cont-false' : 'login-form-password-cont-true'}`}>
          <FormInputLogin 
          inputValue={{
            label: 'Contraseña',
            name: 'password',
            type: 'password',
          }}
          { ...register(
            'password', { 
              required: {
                value: true, 
                message: 'Ingrese una contraseña para ingresar'
              } 
            }) 
          }/>
          {errors.password?.type === 'required' && (
          <span className='login-form-errors'> 
            {errors.password?.message}
          </span>
          )}        
          <button className='login-form-button-back' onClick={handlerChangeClassName}>Volver</button>
          <button type='submit' className='login-form-button-submit'>Ingresar</button>
          <a>¿Olvidaste tu clave?</a>  
        </div>           
      </form>
    </div>
  )
}

export default FormSubmitLogin