'use client'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import FormInput from './Form-input'
import postDataRegister from '../../hook/post-data-register'

export const FormRegister = () => {
  const [stateForm, setStateForm] = useState(false)
  function changeStateForm() {
    setStateForm(!stateForm)
  }
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = (data) => {
    console.log(data), postDataRegister(data)
  }
  return (
    <form className='form-register' onSubmit={handleSubmit(onSubmit)}>
      <div className={`form-register-cont ${stateForm ? 'form-register-cont-1-out' : 'form-register-cont-1-in'}`}>
        <FormInput
          valueInput={{
            label: 'Nombre',
            type: 'text',
            useForm: {
              ...register('firstName', {
                required: true,
                maxLength: {
                  value: 20,
                  message: 'maximo 20 caracteres'
                }
              })
            }
          }}
        />
        {errors.firstName?.type === 'required' && (
          <p role='alert' className='form-register-alert'>
            Campo requerido
          </p>
        )}
        {errors.firstName?.type === 'maxLength' && (
          <p role='alert' className='form-register-alert'>
            {errors.firstName?.message}
          </p>
        )}
        <FormInput
          valueInput={{
            label: 'Apellido',
            type: 'text',
            useForm: {
              ...register('lastName', {
                required: 'campo requerido',
                maxLength: {
                  value: 30,
                  message: `maximo 30 caracteres`
                }
              })
            }
          }}
        />
        {errors.lastName?.type === 'required' && (
          <p role='alert' className='form-register-alert'>
            Campo requerido
          </p>
        )}
        {errors.lastName?.type === 'maxLength' && (
          <p role='alert' className='form-register-alert'>
            {errors.lastName?.message}
          </p>
        )}
        <button className='form-register-next' onClick={changeStateForm}>
          Siguiente
        </button>
      </div>
      <div className={`form-register-cont ${stateForm ? 'form-register-cont-2-in' : 'form-register-cont-2-out'} `}>
        <FormInput valueInput={{ label: 'Fecha de nacimiento', type: 'date', useForm: { ...register('dob', { required: 'campo requerido' }) }, className: 'form-register-cont-2-in-dob' }} />
        {errors.dob?.type === 'required' && (
          <p role='alert' className='form-register-alert'>
            Campo requerido
          </p>
        )}
        <select {...register('gender', { required: true })} className='form-register-select form-register-cont-2-in-select'>
          <option value='female'>Mujer</option>
          <option value='male'>Hombre</option>
          <option value='other'>Indefinido</option>
        </select>
        <FormInput
          valueInput={{
            label: 'dni',
            type: 'number',
            useForm: {
              ...register('dni', {
                required: 'campo requerido',
                maxLength: {
                  value: 8,
                  message: 'maximo 8 caracteres'
                }
              })
            }
          }}
        />
        {errors.dni?.type === 'required' && (
          <p role='alert' className='form-register-alert'>
            Campo requerido
          </p>
        )}
        {errors.dob?.type === 'maxlength' && (
          <p role='alert' className='form-register-alert'>
            {errors.dni?.message}
          </p>
        )}
        <FormInput
          valueInput={{
            label: 'Ingrese su email',
            type: 'email',
            useForm: {
              ...register('email', {
                required: 'campo requerido',
                pattern: {
                  value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'por favor ingresar un email valido'
                }
              })
            }
          }}
        />
        {errors.email?.type === 'required' && (
          <p role='alert' className='form-register-alert'>
            Campo requerido
          </p>
        )}
        {errors.email?.type === 'pattern' && (
          <p role='alert' className='form-register-alert'>
            {errors.email?.message}
          </p>
        )}
        <button className='form-register-back' onClick={changeStateForm}>
          Volver
        </button>
        <input type='submit' className='form-register-submit' />
      </div>
    </form>
  )
}
