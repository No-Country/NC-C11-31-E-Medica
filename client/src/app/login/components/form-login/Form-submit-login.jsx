import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form'
import FormInputLogin from './Form-input-login';
import checkPatientCredentials from '@/app/services/checkPatientCredentials';
import GlobalContext from '@/app/context/global/Global-context';
import { Report } from 'notiflix';

const FormSubmitLogin = () => {
  const [firstStep, setFirstStep] = useState(true)
  const{
    register,
    reset,
    formState: { errors },
    watch,
  } = useForm();
  const formData = watch();

  const handleChangeFirstStep = () => {
    // !errors.email &&
      setFirstStep(false)
  }

  const handleChangeSecondStep = () => {
    reset()
    setFirstStep(true)
  }

  const handleLogin = async () => {
    try {
      const userCredentials = await checkPatientCredentials(formData.email, formData.password)
      if(!userCredentials) {
        Report.failure(
          'Email o contraseña incorrectos.',
          'Verificá e intentá nuevamente.',
          'Entendido'
        )
      } else {
        localStorage.setItem("user", JSON.stringify(userCredentials))
        Report.success(
          `Bienvenido, ${userCredentials.firstName}`,
          'Haz click en tu ávatar para acceder a tus citas.',
          '¡Vamos!'
        )
      }
    } catch(err) {}
  }

  return (
    <div className='login-form-submit-cont'>
      <form>
        {firstStep ? (
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
            <button 
              className='login-form-button-next' 
              disabled={errors.email?.type} 
              onClick={handleChangeFirstStep}
            >
              Siguiente
            </button>
          </div>
          </div> 
          ): (
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
            <button
              type="button"
              className='login-form-button-back'
              onClick={handleChangeSecondStep}
            >
              Volver
            </button>
            <button
              type="button"
              className='login-form-button-submit'
              onClick={handleLogin}
            >
              Ingresar
            </button>
            <a className='login-form-forget-password'>¿Olvidaste tu contraseña?</a>  
          </div>
          </div>
        )}          
      </form>
    </div>
  )
}

export default FormSubmitLogin