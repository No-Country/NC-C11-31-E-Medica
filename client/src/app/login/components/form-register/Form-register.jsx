'use client'
import { useForm } from 'react-hook-form'
import FormInput from './Form-input'

export const FormRegister = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <form className='form-register' onSubmit={handleSubmit(onSubmit)}>
      <div className='form-register-cont form-register-cont-1'>
        <FormInput valueInput={{ label: 'Nombre', type: 'text', useForm: { ...register('firstName', { required: true, maxLength: 20 }) } }} />
        <FormInput valueInput={{ label: 'Apellido', type: 'text', useForm: { ...register('LastName', { required: true, maxLength: 30 }) } }} />
      </div>
      <div className='form-register-cont form-register-cont-2'>
        <FormInput valueInput={{ label: 'Fecha de nacimiento', type: 'date', useForm: { ...register('date', { required: true, maxLength: 30 }) } }} />
        <select>
          <option value='F'>Mujer</option>
          <option value='M'>Hombre</option>
          <option value='I'>Indefinido</option>
        </select>
        <FormInput
          valueInput={{
            label: 'Ingrese su email',
            type: 'email',
            useForm: {
              ...register('Email', {
                required: true,
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              })
            }
          }}
        />
      </div>
      <input type='submit' />
    </form>
  )
}
