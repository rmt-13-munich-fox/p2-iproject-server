var axios = require('axios').default

const newsAPI = (req, res) => {
  try {
    axios({
      url: 'https://newsapi.org/v2/everything',
      method: 'GET',
      params: {
        q: 'motivation',
        apiKey: '8630528fdced4db19bedd84abdf011b5'
      }
    })
      .then(({ data }) => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(500).json({ message: err.message })
      })
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports = newsAPI