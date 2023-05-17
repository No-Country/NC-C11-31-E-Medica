import { CardSpecialties } from '../CardSpecialties/CardSpecialties'

const WrapperGrid = () => {
  const specialties = ['Cardiología', 'Odontología', 'Traumatología', 'Obstetricia', 'Oftalmología', 'Dermatología', 'Pediatría', 'Cirugía']
  return (
    <div className='wrapperGrid'>
      <div className='wrapperTexts'>
        <h2>Nuestros servicios</h2>
        <p>Contamos con +200 servicios para vos y tu familia</p>
      </div>
      {specialties.map((specielty) => (
        <CardSpecialties specielty={specielty} />
      ))}
    </div>
  )
}

export default WrapperGrid
