const inicializer = require('../middlewares/microservices');
const validateDataMiddelware = require('../middlewares/validate');
const emailMiddleware =  require('../middlewares/email')

exports.sendMail= [
    inicializer.initializer,
    validateDataMiddelware.validator,
    validateDataMiddelware.formatData,
    emailMiddleware.send
]