function errHandler(err, req, res, next) {
    let message = []
    let code = 0

    switch (err.name) {
        case 'SequelizeValidationError':
            err.errors.forEach(item => {
                message.push(item.message)
            });

            code = 400
            break;
    
        case 'AuthenticationError':
            message.push(err.message)

            code = 403
            break;
            
        case 'ServerError':
            message.push(err.message)

            code = 500
            break;
        
        default:
            message.push(err.message)

            code = 500            
            break;
    }

    res.status(code).json({
        message
    })
}

module.exports = errHandler