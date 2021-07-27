const { User } = require('../models');
const jwt = require('jsonwebtoken');

const authentication = (req, res, next) => {
  let {access_token} = req.headers
  
  if (access_token){
    const payload = jwt.verify(access_token, process.env.SECRET_JWT);
   
    User.findByPk(+payload.id)
      .then(data => {
        req.user = {id: data.id, username: data.username}
        next()
      })
      .catch(err => {
        res.status(403).json({msg: 'Invalid JWT'})
      })

  } else {
    res.status(403).json({msg: 'Please Login First'})
  }
  
}


module.exports = {
  authentication
}