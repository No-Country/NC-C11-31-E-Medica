export default async function checkPatientCredentials(email, password) {
  // const apiURL = `https://nc-c11-31-e-medica-production.up.railway.app/auth/${userEmail}`
  const apiURL = 'http://localhost:3001/auth'
  return await fetch(apiURL, {
    headers: {
      // 'Content-Type': 'text/json',
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