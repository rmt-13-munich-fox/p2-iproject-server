const axios = require('axios');

class Controller {
  static getByName(req, res){
    const {name} = req.params
    axios({
      method: 'get',
      url : `https://covid-19-data.p.rapidapi.com/country?name=${name}`,
      headers : {
        'x-rapidapi-key' : process.env.TOKEN_RAPID_API,
      }
    })
    .then(result => {
      res.status(200).json(result.data)
    })
    .catch(err => {
      res.status(500).json({msg:'Internal Server Error'})
    })    
  }

  static getByNameAndDate(req, res){
    let {name, date} = req.query
    axios({
      method: 'get',
      url : `https://covid-19-data.p.rapidapi.com/report/country/name?name=${name}&date=${date}`,
      headers : {
        'x-rapidapi-key' : process.env.TOKEN_RAPID_API,
      }
    })
    .then(result => {
      res.status(200).json(result.data)
    })
    .catch(err => {
      res.status(500).json({msg:'Internal Server Error'})
    })    
    
  }

  static getByCode(req, res){
    let {code} = req.params
    axios({
      method: 'get',
      url : `https://covid-19-data.p.rapidapi.com/country/code?code=${code}`,
      headers : {
        'x-rapidapi-key' : process.env.TOKEN_RAPID_API,
      }
    })
    .then(result => {
      res.status(200).json(result.data)
    })
    .catch(err => {
      res.status(500).json({msg:'Internal Server Error'})
    })
  }
}

module.exports = Controller