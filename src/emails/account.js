const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'elorip1@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'elorip1@gmail.com',
        subject: 'Goodbye dear user',
        text: `Goodbye to you my dear user ${name} I wish we could have kept you around`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}