'use client'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import FormInput from './Form-input'
import postDataRegister from '../hook/post-data-register'
import { Report } from 'notiflix'
import { useRouter } from 'next/navigation'

export const FormRegister = async () => {
  const [stateForm, setStateForm] = useState(false)

  const router = useRouter()

  function changeStateForm() {
    setStateForm(!stateForm)
  }

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    delete data.confirmPassword
    console.log(data)
    const newUserData = await postDataRegister(data)
    console.log('newUserData', newUserData)
    if(!newUserData) {
      Report.failure(
        'El registro no fue exitoso.',
        'Si el problema persiste, intentá más tarde.',
        'Entendido'
      )
    } else {
      Report.success(
        '¡Bienvenido!',
        'Haz Click en "Ingresar" para acceder a E-Médica.',
        '¡Vamos!',
        () => {
          router.push('/')
        }
      )
    }
  }
  return (
    <form className='form-register' onSubmit={handleSubmit(onSubmit)}>
      <div className={`form-register-cont ${stateForm ? 'form-register-cont-1-out' : 'form-register-cont-1-in'}`}>
        <FormInput
          valueInput={{
            label: 'Nombre',
            type: 'text',
            Form: {
              ...register('firstName', {
                required: true,
                maxLength: {
                  value: 20,
                  message: 'máximo 20 caracteres.'
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
            Form: {
              ...register('lastName', {
                required: 'campo requerido',
                maxLength: {
                  value: 30,
                  message: `máximo 30 caracteres.`
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
        <Link className='form-register-link' href='/login'>
          ¿Ya tienes una cuenta <span className='form-register-link-span'>ingresar</span> ?
        </Link>
      </div>
      <div className={`form-register-cont ${stateForm ? 'form-register-cont-2-in' : 'form-register-cont-2-out'} `}>
        <FormInput valueInput={{ label: 'Fecha de nacimiento', type: 'date', Form: { ...register('dob', { required: 'campo requerido' }) } }} />
        {errors.dob?.type === 'required' && (
          <p role='alert' className='form-register-alert'>
            Campo requerido
          </p>
        )}
        <select {...register('gender', { required: true })} className='form-register-select'>
          <option value='female'>Mujer</option>
          <option value='male'>Hombre</option>
          <option value='other'>Indefinido</option>
        </select>
        <FormInput
          valueInput={{
            label: 'dni',
            type: 'number',
            Form: {
              ...register('dni', {
                required: 'campo requerido',
                maxLength: {
                  value: 8,
                  message: 'El DNI debe tener 8 caracteres.'
                },
                minLength: {
                  value: 8,
                  message: 'El DNI debe tener 8 caracteres.'
                }
              })
            }
          }}
        />

        {errors.dni?.type === 'maxLength' || 'minLength' ? (
          <p role='alert' className='form-register-alert'>
            {errors.dni?.message}
          </p>
        ) : (
          ''
        )}

        <FormInput
          valueInput={{
            label: 'Ingrese su email',
            type: 'email',
            Form: {
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
        <FormInput
          valueInput={{
            label: 'Contraseña',
            type: 'password',
            Form: {
              ...register('password', {
                required: 'Campo requerido',
                minLength: {
                  value: 10,
                  message: 'La contraseña debe tener al menos 10 caracteres.'
                },
                maxLength: {
                  value: 20,
                  message: 'La contraseña puede tener hasta 20 caracteres.'
                }
              })
            }
          }}
        />
        {errors.password?.type === 'required' && (
          <p role='alert' className='form-register-alert'>
            Campo requerido
          </p>
        )}
        {errors.password?.type === 'minLength' && (
          <p role='alert' className='form-register-alert'>
            {errors.password?.message}
          </p>
        )}
        {errors.password?.type === 'maxLength' && (
          <p role='alert' className='form-register-alert'>
            {errors.password?.message}
          </p>
        )}
        <FormInput
        valueInput={{
          label: 'Confirmar contraseña',
          type: 'password',
          Form: {
            ...register('confirmPassword', {
              required: 'Campor requerido',
              validate: value => watch('password') === value
            })
          }
        }}
      />
      {errors.confirmPassword?.type === 'required' && (
        <p role='alert' className='form-register-alert'>
          Campo requerido
        </p>
      )}
      {errors.confirmPassword?.type === 'validate' && (
        <p role='alert' className='form-register-alert'>
          Las contraseñas deben coincidir.
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
