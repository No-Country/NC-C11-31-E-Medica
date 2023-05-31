import React from 'react'
import TurnStepCard from './TurnStepCard'

const TurnSteps = () => {
  return (
    <>
    <div className='turnStep-title'>
        <h2>¿Como funciona E-medica?</h2>
        <h4>Aprende en cuatro simples pasos cómo funciona E-Medica</h4>
    </div>
        <div className='turnStep-cont'>
            <TurnStepCard
            image={'/images/step1.png'}
            title={'1. Busca el profesional'}
            description={'En nuestra sección de profesionales encontrá el que mejor se adapte a tus necesidades.'}
            />
            <TurnStepCard
            image={'/images/step2.png'}
            title={'2. Confirmá la disponibilidad'}
            description={'Confirmá la disponibilidad horario del profesional en la agenda disponible en su perfil.'}
            />
            <TurnStepCard
            image={'/images/step3.png'}
            title={'3. Registra tu turno'}
            description={'Una vez registrado el turno, recibiras la confirmación por correo y recordatorios por mensajes de texto.'}
            />
            <TurnStepCard
            image={'/images/step4.png'}
            title={'4. Ingresa a tu consulta'}
            description={'El día de tu consulta ingresa al link de la reunión que recibiste por correo. Te recomendamos estar conectado 5min antes.'}
            />
        </div>
    </>
  )
}

export default TurnSteps