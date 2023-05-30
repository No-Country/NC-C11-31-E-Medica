
const apiURL = 'http://ec2-18-228-59-5.sa-east-1.compute.amazonaws.com/specialty';

export default function getSpecialty() {
    return fetch(apiURL)
    .then(res => res.json())
    .then(response =>{
        const data = response
            const specialties = data.map(specialty => ({name: specialty.name, id: specialty._id}))
            console.log('specialties:', specialties)
            return specialties
    })
}
