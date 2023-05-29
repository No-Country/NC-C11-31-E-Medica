export default function getPatientsData (userEmail) {
    const apiURL = `http://ec2-18-228-59-5.sa-east-1.compute.amazonaws.com/auth/${userEmail}`
    console.log(apiURL)
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