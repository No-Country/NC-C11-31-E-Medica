const postDataRegister = (data) => {
  console.log(data)
  const opciones = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  console.log(opciones.body)

  fetch('http://ec2-18-228-59-5.sa-east-1.compute.amazonaws.com/patient', opciones)
    .then((response) => response.json())
    .then((response) => {
      let respuesta = console.log(response)
      console.log(respuesta)
    })
    .catch((err) => console.log('se a producido un error:' + err))

  return
}

export default postDataRegister
