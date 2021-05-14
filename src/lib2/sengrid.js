const sgMail = require('@sendgrid/mail');

class SendGrid {
    constructor(ApiKey,from) {
        this.sgMail = sgMail;
        this.sgMail.setApiKey(ApiKey);
        this.emailFrom =  from;
    }

    async sendMail(to,subject,html){
        const msg = {
            to: to,
            from: this.emailFrom, 
            subject: subject,
            //text: 'test',
            html: html,
          };
        return await this.sgMail.send(msg);
    }
}

module.exports = {
    SendGrid
}