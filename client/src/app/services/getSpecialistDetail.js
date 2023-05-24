const apiURL = 'http://ec2-18-228-59-5.sa-east-1.compute.amazonaws.com/specialty/{id}';

export default function getSpecialistDetail() {
    return fetch(apiURL)
    .then(res => res.json())
    .then(response =>{
        const data = response
        console.log(data)
            return data  
    })
}