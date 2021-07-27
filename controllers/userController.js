const { User } = require ('../models'); 

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
    res.end()
  }
}

module.exports = Controller