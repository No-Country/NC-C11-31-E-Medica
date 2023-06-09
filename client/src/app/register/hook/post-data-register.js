const postDataRegister = async (data) => {
  const opciones = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  return await fetch('https://nc-c11-31-e-medica-production.up.railway.app/patient', opciones)
    .then((response) => response.json())
    .then((response) => {
      return response
    })
    .catch((err) => console.log('se ha producido un error: ' + err))
}

export default postDataRegister
