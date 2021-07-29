const multer = require('multer')

const errorHandler = (err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        res.status(400).json({
            message: err.message
        })
    }else{
        switch(err.name){
            case "ErrorCreateAndEdit":
                // console.log('ini di 400');
                res.status(400).json({
                    message: err.message
                })
                break;
            case "ValidationError":
                // console.log('halooo validation error');
                // if(err)
                // console.log(err);
                // console.log('ini di 400');
                res.status(400).json({
                    message: err.message
                })
                break;
            case "ErrorLoginUser":
                // console.log('ini di 401');
                res.status(401).json({
                    message: err.message
                })
                break;
            case "ErrorAuthentication":
                res.status(401).json({
                    message: err.message
                })
                break;
            case "ForbiddenErrorAuthorization":
                res.status(403).json({
                    message: err.message
                })
                break;
            case "DataCannotBeFound":
                res.status(404).json({
                    message: err.message
                })
                break;
            case "InternalErrorServer":
                res.status(500).json({
                    message: err.message
                })
                break;
        }
    }

}


module.exports = errorHandler