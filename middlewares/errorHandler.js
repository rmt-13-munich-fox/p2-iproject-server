const errorHandler = (err,req,res,next) =>{
    switch(err.code){
      case 400 : 
        res.status(400).json({message : err.message})
        break;
      case 401 : 
        res.status(401).json({message : err.message})
        break;
      case 404 :
        res.status(404).json({message: err.message})
        break;
      case 403 :
        res.status(403).json({message: err.message})
        break;
      case 500 : 
        res.status(500).json({message : err.message || "Internal Server Error"})
        break;
    }
  }
  
  module.exports = errorHandler