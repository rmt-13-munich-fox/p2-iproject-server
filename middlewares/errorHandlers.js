const errorHandler = (err, req, res, next) => {
    switch (err.name) {
        case 'sizeTooBig':
            res.status(413).json({
                message: "You can only upload image with size max 3 mb or below"
            })
            break;

        case 'unsupportedMediaType':
            res.status(415).json({
                message: "You can only upload image with filetype such as : 'jpeg','jpg','png'"
            })
            break;

        case 'internalServerError':
            res.status(500).json({
                message: 'Internal server error'
            })
            break;

        case 'notAuthorized':
            res.status(403).json({
                message: `You're not authorized to do this action`
            })
            break;

        case 'userCantLogin':
            res.status(401).json({
                message: `error invalid email or password`
            })
            break;

        case 'notLoggedIn':
            res.status(401).json({
                message: `You're not logged in. Please login first`
            })
            break;

        case 'invalidToken':
            res.status(401).json({
                message: `Invalid token`
            })
            break;

        case 'errSequelizeOrNo':
            if (err.errName === 'SequelizeValidationError') {
                const errorsMessages = err.data.map(error => {
                    return error.message
                })
                res.status(400).json({
                    msg: errorsMessages
                })
            } else {
                res.status(500).json('Internal server error')
            }
            break;

        case 'notFound':
            res.status(400).json({
                message: err.message + ' is not found'
            })
            break;

        default:
            res.status(500).json("Something went wrong") // based on lecture siang soal tokoped
            break;
    }
}

module.exports = errorHandler