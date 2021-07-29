const { User } = require ('../models');
const { decode } = require ('../helpers/hashing'); 
const jwt = require('jsonwebtoken');

class Controller {

  static register(req, res){
    let {username, email, password} = req.body
    User.create({username, email, password})
      .then(data => {
        res.status(201).json({msg: 'Data created'})
      })
      .catch(err => {
        let errorList = err.message
        errorList = errorList.split('\n')
        res.status(400).json({msg: err.name, detail:errorList});
      })
  }

  static login(req, res){
    let {email, password} = req.body
    if (!email){
      res.status(400).json({msg:'email is required'})
    } else if (!password) {
      res.status(400).json({msg:'password is required'})
    } else {
      User.findOne({where : {email}})
        .then(user => {
          if (!user){
            res.status(404).json({msg:'User does not exist'})
          } else if (decode(password, user.password)){
            let token = jwt.sign({ id: user.id }, process.env.SECRET_JWT);
            res.status(200).json({msg: user.username, token})
          } else {
            res.status(404).json({msg:'Email / Password is wrong'})
          }
        })
        .catch(err => {
          res.status(500).json({msg:'Internal Server Error'})
        })
    }
  }

  static oAuth(req, res){
    let {email, name} = req.body
    let payload = {
      username : name,
      email : email,
      password : '714sdhasjgf348234'
    }
    User.findOne({where : {email}})
      .then(data => {
        if (data === null){
          User.create(payload)
            .then(user => {
              let token = jwt.sign({ id: user.id }, process.env.SECRET_JWT);
              res.status(200).json({msg: user.username, token})
            })
            .catch(err => {
              res.status(500).json({msg:'Internal Server Error'})
            })
        } else {
          let token = jwt.sign({ id: data.id }, process.env.SECRET_JWT);
          res.status(200).json({msg: data.username, token})
        }
      })
      .catch(err => {
        res.status(500).json({msg: 'Internal Server Error'})
      })
  }
}

module.exports = Controller