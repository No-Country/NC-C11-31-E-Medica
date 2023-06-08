import React from 'react'

const FormInputLogin = ({inputValue}) => {
  return (
    <div className='login-form-cont'>
        <label className='login-form-label'>{inputValue.label}</label>
        <input 
            name={inputValue.name} 
            type={inputValue.type} 
            placeholder={inputValue.placeholder}
            className={`${inputValue.className}`}
            {...inputValue.Form}
        />
    </div>
  )
}

export default FormInputLogin