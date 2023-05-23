import FormLogin from './components/form-login/Form-login'
import { FormRegister } from './components/form-register/Form-register'

const page = () => {
  return (
    <>
      <article>Usuario</article>
      <FormRegister />
      <FormLogin />
    </>
  )
}

export default page