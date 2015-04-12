var userDB = require('../db/user_db.js');
var basic = require('../functions/basic.js');
var consoleLogger = require('../functions/basic.js').consoleLogger;
var path = require('path');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: "Mailgun",
    auth: {
        user: 'postmaster@mg.harvardgrill.com',
        pass: 'dce059c9eede8f6b7aaf07e676a474c9'
    }
});

var receivedLogger = function (module) {
    var rL = require('./basic.js').receivedLogger;
    rL('middleware.js', module);
};

var successLogger = function (module, text) {
    var sL = require('./basic.js').successLogger;
    return sL('middleware.js', module, text);
};

var errorLogger = function (module, text, err) {
    var eL = require('./basic.js').errorLogger;
    return eL('middleware.js', module, text, err);
};

module.exports = {
    sendWelcomeEmail: function (theUser) {
        transporter.sendMail({
            from: '"HarvardGrill" <admin@mg.harvardgrill.com>',
            to: theUser.email,
            subject: 'Welcome to HarvardGrill!',
            html: {
                path: path.join(__dirname, "../views/admin/emails/welcome.html")
            }
        });
    },

    contactUs: function (userEmail, message) {
        //send email to admin
        transporter.sendMail({
            from: userEmail,
            to: 'contact-us@mg.harvardgrill.com',
            text: message
        });

        //send confirmation email to user
        transporter.sendMail({
            from: '"HarvardGrill" <admin@mg.harvardgrill.com>',
            to: userEmail,
            subject: 'We have received your message',
            html: {
                path: path.join(__dirname, "../views/admin/emails/contact_us_reply.html")
            }
        });
    }
};