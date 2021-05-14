const { SendGrid  } =  require('../libs/sengrid');

const sengrid = new SendGrid(process.env.SENDGRID_API_KEY, process.env.EMAIL);

async function send(data){
    return await sengrid.sendMail(data.to,data.subject,data.html);
}

module.exports = {
    send
}