const emailController = require('../controllers/email');  

async function sendEmail(req, res) {
    try {
        await emailController.send(req.objects.data);
        req.response.setterStatus(200),
        req.response.setterResult("Message Send");
    } catch (error) {
        req.response.setterStatus(400),
        req.response.setterResult("Message Error");
    }
    res.status(req.response.getterStatus()).json(req.response.answer());
}

module.exports ={
    send: sendEmail
}