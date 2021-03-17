const sgMail = require('@sendgrid/mail');
var Promise = require('bluebird');
const { response } = require('express');

module.exports = {
    sendEmail: function (emailInfo) {

        return new Promise(function (resolve, reject) {
            sgMail.setApiKey(process.env.SENDGRID_API_KEY);
            const msg = {
                to: emailInfo.recipient,
                from: 'aguidissou.abrahamyann@adgroupe.io', // Use the email address or domain you verified above
                subject: emailInfo.subject,
                text: emailInfo.content,
                html: emailInfo.content
            };
            sgMail
                .send(msg)
                .then(() => { }, error => {
                    reject(error)
                    // console.error(error);

                    if (error.response) {
                        resolve(response)
                        console.error(error.response.body)
                    }
                });
        })

    }
}