
export default function getSpecialistDetail (finalEndpoint) {
    const apiURL = `http://ec2-18-228-59-5.sa-east-1.compute.amazonaws.com/specialist/${finalEndpoint}`;
    return fetch(apiURL)
    .then(res => res.json())
    .then(response =>{
        const data = response
        console.log(data)
        return data
    })
}