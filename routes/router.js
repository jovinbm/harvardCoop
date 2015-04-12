var path = require('path');
var basic = require('../functions/basic.js');
var consoleLogger = require('../functions/basic.js').consoleLogger;

var receivedLogger = function (module) {
    var rL = require('../functions/basic.js').receivedLogger;
    rL('router', module);
};

var successLogger = function (module, text) {
    var sL = require('../functions/basic.js').successLogger;
    return sL('router', module, text);
};
var errorLogger = function (module, text, err) {
    var eL = require('../functions/basic.js').errorLogger;
    return eL('router', module, text, err);
};

function getTheUser(req) {
    return req.customData.theUser;
}

module.exports = {
    index_Html: function (req, res) {
        var module = 'indexHtml';
        receivedLogger(module);

        res.render('index', {
            errorCode: 0,
            errorMessage: "No errors"
        });
    }
};