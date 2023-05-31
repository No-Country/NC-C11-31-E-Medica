
const apiURL = 'http://ec2-18-228-59-5.sa-east-1.compute.amazonaws.com/specialty';

export default async function getSpecialty() {
    const res = await fetch(apiURL);
    console.log(res);
    const response = await res.json();
    console.log(response);
    const data = response;
    const specialties = data.map(specialty => ({ name: specialty.name, id: specialty._id }));

    console.log('specialties:', specialties);
    return specialties;
}
