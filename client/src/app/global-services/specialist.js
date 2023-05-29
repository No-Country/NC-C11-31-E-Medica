import { useState } from 'react'

const specialist = () => {
  fetch('http://ec2-18-228-59-5.sa-east-1.compute.amazonaws.com/specialist')
    .then((respuesta) => respuesta.json())
    .then((respuesta) => console.log(respuesta))
}

export default specialist
