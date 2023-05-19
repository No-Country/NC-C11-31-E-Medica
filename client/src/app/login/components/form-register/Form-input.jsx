'use client'

const FormInput = ({ valueInput }) => {
  return (
    <article className='form-register-article'>
      <label>{valueInput.label}</label>
      <input type={valueInput.type} className='form-register-input' {...valueInput.useForm} />
    </article>
  )
}

export default FormInput
