const errorHandler = (err,req,res,next) => {
  if(!err.code){
    if(err.errors){
      err.message = err.errors.map(err => err.message)
      err.code = 400
    }else{
      err.code = 500
      err.message = err.message || "Ups something went wrong"
    }
  }

  switch(err.code){
    case 400 : 
      res.status(400).json({message : err.message})
      break;
    case 401 : 
      res.status(401).json({message : err.message})
      break;
    case 403 : 
      res.status(403).json({message : err.message})
    break;
    case 404 :
      res.status(404).json({message: err.message})
      break;
    case 500 : 
      res.status(500).json({message : err.message})
      break;
    default : 
      res.status(500).json("Something went wrong")
      break;
  }

}

module.exports = errorHandler