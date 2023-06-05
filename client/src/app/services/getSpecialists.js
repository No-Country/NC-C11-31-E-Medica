//https://nc-c11-31-e-medica-production.up.railway.app
//http://localhost:5000
const apiURL = 'https://nc-c11-31-e-medica-production.up.railway.app/specialist'
export default async function getSpecialists() {
    try {

        return await fetch(apiURL)
            .then((res) => res.json())
            .then((response) => {
                const specialistsData = response
                console.log('specialistsData', specialistsData)
                return specialistsData
            })
    } catch (error) {
        console.log(error)
    }
}
