import React from 'react'
import Image from 'next/image'

const TurnStepCard = ({image, title, description}) => {
  return (
    <div className='turnStep-cont1'>
        <Image 
        src={image}
        width={500}
        height={500}
        alt={title}
        className='turnStep-image'
        />
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default TurnStepCard