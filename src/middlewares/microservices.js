const { Response } = require('../libs/response');


function initializer(req, res, next) {
    const response = new Response(req.headers.host, req.originalUrl);
    req.response = response;
    next();
}

module.exports = {
    initializer
}