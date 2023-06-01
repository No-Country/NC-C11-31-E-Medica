export default function getSpecialists() {
    const apiURL = 'https://nc-c11-31-e-medica-production.up.railway.app/specialist'

    return fetch(apiURL)
        .then((res) => res.json())
        .then((response) => {
            const specialistsData = response
            console.log('specialistsData', specialistsData)
            return specialistsData
        })
}
