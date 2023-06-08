export default function checkPatientCredentials(email, password) {
  const apiURL = `https://nc-c11-31-e-medica-production.up.railway.app/auth`
  return fetch(apiURL, {
    headers: {
      'Authorization': email + ':' + password
    }
  })
      .then(res => res.json())
      .then(data => {
        
          return data
      })
      .catch((err) =>
          console.log('errorServer:', err))
}