//https://nc-c11-31-e-medica-production.up.railway.app
//http://localhost:5000
const apiURL = 'https://nc-c11-31-e-medica-production.up.railway.app/specialty';
export default function getSpecialty() {
    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const data = response
            const specialties = data.map(specialty => ({ name: specialty.name, id: specialty._id }))
            console.log('specialties:', specialties)
            return specialties
        })
}
