import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import FormInputLogin from './Form-input-login';
import getPatientsData from '@/app/services/getPatientsData';

const FormSubmitLogin = () => {
  
  const[firstStep, setFirstStep] = useState(true)
  const[data, setData] = useState('')
  console.log('estado', data)
  
  const{
    register,  
    formState: { errors },
    handleSubmit
  } = useForm();
  console.log('errors:', errors)

  const onSubmit = (data) =>{
    getPatientsData(data.email)
    setData(data)
    console.log('data',data)
  }

  const handlerChangeFistStep = ()=> {
    data.email &&
    setFirstStep(!firstStep)
  }

  return (
    <div className='login-form-submit-cont'>
      <form onSubmit={handleSubmit(onSubmit)}>
        {
          firstStep ? 
          <div>
            <FormInputLogin 
            inputValue={{
              label: 'Correo electrónico',
              name: 'email',
              type: 'email',
              placeholder: 'juanperez@gmail.com',
              Form:{
                ...register('email',{
                  required:{
                    value: true,
                    message: 'Ingrese un email para continuar'
                  }
                })
              }
            }}
            />
            {errors.email?.type === 'required' && (
            <span className='login-form-errors'> 
            {errors.email?.message}
            </span>
          )}
          <div className='login-form-button-cont'>
            <button className='login-form-button-next button' disabled={errors.email?.type} onClick={handlerChangeFistStep}>Continuar</button>
          </div>
          </div> 
          : 
          <div>
            <FormInputLogin 
            inputValue={{
              label: 'Contraseña',
              name: 'password',
              type: 'password',
              Form:{
                ...register('password',{
                  required:{
                    value: true,
                    message: 'Ingrese su clave para ingresar'
                  }
                })
              }
            }}
            />
            {errors.password?.type === 'required' && (
            <span className='login-form-errors'> 
            {errors.password?.message}
            </span>
          )}
          <div className='login-form-button-cont'>
            <button className='login-form-button-back button' onClick={handlerChangeFistStep}>Volver</button>
            <button type='submit' className='login-form-button-submit button'>Ingresar</button>
            <a className='login-form-forget-password'>¿Olvidaste tu contraseña?</a>  
          </div>
          </div>
        }          
      </form>
    </div>
  )
}

export default FormSubmitLogin