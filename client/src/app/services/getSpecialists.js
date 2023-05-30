export default function getSpecialists () {
    const apiURL = 'http://ec2-18-228-59-5.sa-east-1.compute.amazonaws.com/specialist'
    
    return fetch(apiURL)
    .then((res) => res.json())
    .then((response) =>{
        const specialistsData = response
        console.log('specialistsData', specialistsData)
        return specialistsData
    })
}
