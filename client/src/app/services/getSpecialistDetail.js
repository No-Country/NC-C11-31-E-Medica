//https://nc-c11-31-e-medica-production.up.railway.app
//http://localhost:5000
export default function getSpecialistDetail(finalEndpoint) {
    const apiURL = `https://nc-c11-31-e-medica-production.up.railway.app/specialist/${finalEndpoint}`;
    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const data = response
            console.log('data:', data)
            return data
        })
}