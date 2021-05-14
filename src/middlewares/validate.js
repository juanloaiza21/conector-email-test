const {validationResult} = require('express-validator');

async function validationData(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        req.response.setterError(errors);
        req.response.setterStatus(400);
        res.status(req.response.getterStatus()).json(req.response.answer());
    }
    else {
    next();
    }
}

function formatData(req, res, next) {
    req.objects = {};
    req.objects.data = {};
    switch (req.method) {
        case 'POST':
            req.objects.data = req.body
            if(req.files){
                req.objects.data.files = req.files
            }
            break;
        case 'GET':
            req.objects.data = req.query
            break;
    }
    next();
}

module.exports = {
    formatData,
    validator: validationData
}