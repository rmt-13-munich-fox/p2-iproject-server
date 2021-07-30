var axios = require("axios").default;

var search = (req, res) => {
  axios({
    method: 'GET',
    url: 'https://google-search3.p.rapidapi.com/api/v1/images/q=motivational-books',
    headers: {
      'x-rapidapi-key': '35bdcf17c8msh2f9991bf7cd8a0dp1e82a9jsn333b8bf6775a',
      'x-rapidapi-host': 'google-search3.p.rapidapi.com'
    }
  })
    .then(({ data }) => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json(err.message)
    })
}

module.exports = search