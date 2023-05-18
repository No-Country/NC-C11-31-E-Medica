import { CardSpecialties } from '../CardSpecialties/CardSpecialties'

const WrapperGrid = () => {
  const specialties = [
    { specielty: 'Cardiología', key: 1 },
    { specielty: 'Odontología', key: 2 },
    { specielty: 'Traumatología', key: 3 },
    { specielty: 'Obstetricia', key: 4 },
    { specielty: 'Oftalmología', key: 5 },
    { specielty: 'Dermatología', key: 6 },
    { specielty: 'Pediatría', key: 7 },
    { specielty: 'Cirugía', key: 8 }
  ]
  return (
    <div className='wrapperGrid'>
      <div className='wrapperTexts'>
        <h2>Nuestros servicios</h2>
        <p>Contamos con +200 servicios para vos y tu familia</p>
      </div>
      {specialties.map((specielty) => (
        <CardSpecialties key={specielty.key} specielty={specielty.specielty} />
      ))}
    </div>
  )
}

export default WrapperGrid
