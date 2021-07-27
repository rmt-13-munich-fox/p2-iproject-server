const axios = require('axios')

async function getUrl(){
    const response = await axios.get('https://parseapi.back4app.com/classes/Car_Model_List_Aston_Martin?count=1&limit=40&order=Model', {
        headers: {
            'X-Parse-Application-Id': 'hlhoNKjOvEhqzcVAJ1lxjicJLZNVv36GdbboZj3Z', // This is the fake app's application id
            'X-Parse-Master-Key': 'SNMJJF0CZZhTPhLDIqGhTlUNV9r60M2Z5spyWfXW', // This is the fake app's readonly master key
          }
    })
    let data = response.data.results
    // console.log(data);
    let result = data.map(el => {
        const ob = {
            name: el.Make,
            model: el.Model,
            year: el.Year,
            category: el.Category,
            createdAt: el.createdAt,
            updatedAt: el.updatedAt
        }
        return ob
    })
    return result
}

module.exports = getUrl