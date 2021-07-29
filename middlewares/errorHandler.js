function errHandler(err, req, res, next) {
    console.log('masuk error handler <<<<<<');
    console.log(err);
    res.status(500).json(err)
}

module.exports = errHandler