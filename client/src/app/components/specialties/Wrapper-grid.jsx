import { CardSpecialties } from '../CardSpecialties/CardSpecialties'
import getSpecialties from '@/app/services/getSpecialties'
import { useEffect, useState } from 'react'

const WrapperGrid = () => {

  const [specialties, setSpecialties] = useState([])
  console.log('state:', specialties)

  useEffect(() => {
    getSpecialties().then(specialties => setSpecialties(specialties))
  }, [])

  return (
    <div className='wrapperGrid'>
      <div className='wrapperTexts'>
        <h2>Nuestros servicios</h2>
        <p>Contamos con +200 servicios para vos y tu familia</p>
      </div>
      {specialties.slice(0, 12).map((specielty, index) => (
        <CardSpecialties specielty={specielty} key={index} />
      ))}
    </div>
  )
}

export default WrapperGrid
