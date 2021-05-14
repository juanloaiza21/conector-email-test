const { check, validationResult } = require('express-validator');

function preRegisterSchema(data) {
    let infoData = {
        id: data.id,
        name: data.name,
        email: data.email,
        address: data.address,
        phoneNumber: data.phoneNumber
    }
    return infoData
}


const emailSendRules = {
    to: {
        in: ['body'],
        isEmail: true
    },
    subject: {
        in: ['body']
    },
    title: {
        in: ['body']
    },
    data: {
        in: ['body']
    }
}

module.exports = {
    emailSendRules
};