//https://nc-c11-31-e-medica-production.up.railway.app
//http://localhost:5000
export default function getPatientsData(userEmail) {
    const apiURL = `https://nc-c11-31-e-medica-production.up.railway.app/auth/${userEmail}`
    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const userData = response
            localStorage.setItem("firstName", JSON.stringify(userData.patient.firstName))
            localStorage.setItem("lastName", JSON.stringify(userData.patient.lastName))
            localStorage.setItem("email", JSON.stringify(userData.patient.email))
            console.log('userData:', userData)
            return userData
        })
        .catch((err) =>
            console.log('errorServer:', err))
}