'use client'

const FormInput = ({ valueInput }) => {
  return (
    <article className='form-register-article'>
      <label className={'form-register-label'}>{valueInput.label}</label>
      <input type={valueInput.type} className={`form-register-input ${valueInput.className}`} {...valueInput.useForm} />
    </article>
  )
}

export default FormInput
