const TurnSteps = () => {
  return (
    <section className='information'>
      <h2 className='information-h2'>¿Querés pedir tu turno?</h2>
      <p className='information-p'>Aprende en cuatro simples pasos cómo funciona E-Medica</p>
      <div className='steps'>
        <article className='information-article'>
          <h3 className='information-h3'>
            <span className='growUp'>1</span>er paso
          </h3>
          <p className='information-p'>busca el profesional que estas necesitando</p>
        </article>
        <article className='information-article'>
          <h3 className='information-h3'>
            <span className='growUp'>2</span>do paso
          </h3>
          <p className='information-p'>Mirá toda la disponibilidad del profesional, eligiendo el dia y el horario</p>
        </article>
        <article className='information-article'>
          <h3 className='information-h3'>
            <span className='growUp'>3</span>er paso
          </h3>
          <p className='information-p'>Registrá tu turno en la agenda médica. Recibiras la confirmación por e-mail y recordatorios por mensajes de texto</p>
        </article>
        <article className='information-article'>
          <h3 className='information-h3'>
            <span className='growUp'>4</span>to paso
          </h3>
          <p className='information-p'>Espera el turno en el horario y dia acordado. Te recomendamos estar conectado 5min antes.</p>
        </article>
      </div>
    </section>
  )
}

export default TurnSteps
