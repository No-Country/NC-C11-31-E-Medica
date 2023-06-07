import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form'
import FormInputLogin from './Form-input-login';
import checkPatientCredentials from '@/app/services/checkPatientCredentials';
import GlobalContext from '@/app/context/global/Global-context';
import { Report } from 'notiflix';

const FormSubmitLogin = () => {
  const { userData, setUserData } = useContext(GlobalContext)
  const [firstStep, setFirstStep] = useState(true)
  const [data, setData] = useState('')
  
  const{
    register,
    reset,
    formState: { errors },
    handleSubmit
  } = useForm();
  console.log('errors:', errors)

  const onSubmit = (data) =>{
    setData(data)
  }

  const handleChangeFirstStep = () => {
    data.email &&
    setFirstStep(!firstStep)
  }

  const handleChangeSecondStep = () => {
    reset()
    setFirstStep(!firstStep)
  }

  const handleLogin = async () => {
    const userCredentials = await checkPatientCredentials(data.email, data.password)
    console.log('Before login: ', userData)
    console.log('User credentials: ', userCredentials)
    if(!userCredentials) {
      Report.failure(
        'Email o contraseña incorrectos.',
        'Verificá e intentá nuevamente.',
        'Entendido'
      )
    } else {
      await setUserData(userCredentials)
      console.log('After login:', userData)
      Report.success(
        `Bienvenido, ${userData.firstName}`,
        'Haz click en tu ávatar para acceder a tus citas.',
        '¡Vamos!'
      )
    }
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
              placeholder: 'example@example.com',
              Form:{
                ...register('email',{
                  required:{
                    value: true,
                    message: 'Ingrese un email para continuar.'
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
            <button className='login-form-button-next' disabled={errors.email?.type} onClick={handleChangeFirstStep}>Siguiente</button>
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
                    message: 'Ingrese su clave para ingresar.'
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
            <button className='login-form-button-back' onClick={handleChangeSecondStep}>Volver</button>
            <button type='submit' className='login-form-button-submit' onClick={handleLogin}>Ingresar</button>
            <a className='login-form-forget-password'>¿Olvidaste tu contraseña?</a>  
          </div>
          </div>
        }          
      </form>
    </div>
  )
}

export default FormSubmitLogin