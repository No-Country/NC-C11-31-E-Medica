
const apiURL = 'https://e-medica-api.onrender.com/specialty';

export default function getSpecialties() {
    return fetch(apiURL)
    .then(res => res.json())
    .then(response =>{
        const data = response
            const specialties = data.map(specialty => specialty.name)
            console.log('specialties:', specialties)
            return specialties
    })
}
