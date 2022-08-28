const errorHandler = (err, req, res, next) => {
    //catch the 400 or else its a 500
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode)

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null: err.stack
    })

}

module.exports = {
    errorHandler,
}