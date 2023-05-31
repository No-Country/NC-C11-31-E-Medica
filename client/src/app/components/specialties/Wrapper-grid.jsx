import { CardSpecialties } from '../CardSpecialties/CardSpecialties'
import getSpecialty from '@/app/services/getSpecialty'
import { useEffect, useState } from 'react'

const WrapperGrid = () => {

  const [specialties, setSpecialties] = useState([])

  useEffect(() => {
    getSpecialty().then(specialties => setSpecialties(specialties))
  }, [])

  return (
    <div className='wrapperGrid'>
      <div className='wrapperTexts'>
        <h2>Nuestros servicios</h2>
        <p>Contamos con +200 servicios para vos y tu familia</p>
      </div>
      {specialties.length &&
        specialties.slice(0, 12).map((specielty, index) => (
          <CardSpecialties specielty={specielty.name} key={index} id={specielty.id} />
        ))}
    </div>
  )
}

export default WrapperGrid
