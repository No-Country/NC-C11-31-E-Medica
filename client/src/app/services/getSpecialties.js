
const apiURL = 'http://ec2-18-228-59-5.sa-east-1.compute.amazonaws.com/specialty';

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
