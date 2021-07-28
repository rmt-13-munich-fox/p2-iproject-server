const errorHandler = (err, req, res, next) => {

    switch (err.code) {
        case 400:
            res.status(err.code).json({error: err.msg})
            break;
        case 500:
            res.status(err.code).json({error: err.msg || "Internal server error"})
            break;
        case 404:
            res.status(err.code).json({error: err.msg || "error not found"})
            break;
        case 403:
            res.status(err.code).json({error: err.msg})
            break;
        case 401:
            res.status(err.code).json({error: err.msg})
            break;
    }


}


module.exports = errorHandler