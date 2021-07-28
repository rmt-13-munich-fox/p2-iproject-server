function authentication(req, res, next) {
    console.log('masuk authentication =======');
    next()
}

module.exports = {
    authentication
}