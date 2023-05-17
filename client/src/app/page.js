import {Hero} from './components/Hero/Hero'
import { CardSpecialties } from './components/CardSpecialties/CardSpecialties'

const Page = () => {
  
  const specialties = ['Cardiology','Dentist', 'Traumatologist', 'Obstetrician', 'Oculist', 'Dermatologist', 'Pediatrician', 'Surgeon']
  
  return (
    <div>
      <Hero />
      <div className='wrapperTexts'>
        <h2>Nuestros servicios</h2>
        <p>Contamos con +200 servicios para vos y tu familia</p>
      </div>
      <div className='wrapperGrid'>
        {specialties.map(specielty => <CardSpecialties specielty={specielty}/>)}
      </div>
    </div>
  )
  
}

export default Page
