var basic = require('../functions/basic.js');
var consoleLogger = require('../functions/basic.js').consoleLogger;
var userDB = require('../db/user_db.js');

var receivedLogger = function (module) {
    var rL = require('../functions/basic.js').receivedLogger;
    rL('component_api', module);
};

var successLogger = function (module, text) {
    var sL = require('../functions/basic.js').successLogger;
    return sL('component_api', module, text);
};
var errorLogger = function (module, text, err) {
    var eL = require('../functions/basic.js').errorLogger;
    return eL('component_api', module, text, err);
};

module.exports = {

    addToCart: function (req, res) {
        var module = 'addToCart';
        receivedLogger(module);
        var userUniqueCuid = req.user.uniqueCuid;
        var component = req.body.component;
        userDB.addToCart(userUniqueCuid, component, error, error, success);

        function success(savedUser) {
            consoleLogger(successLogger(module));
            res.status(200).send({
                userData: savedUser,
                notify: true,
                type: 'success',
                msg: "Cart updated"
            });
        }

        function error() {
            consoleLogger(errorLogger(module));
            res.status(500).send({
                code: 500,
                notify: true,
                type: 'error',
                msg: "A problem occurred while adding that item to the cart. Please try again"
            });
        }
    },

    increaseQuantity: function (req, res) {
        var module = 'increaseQuantity';
        receivedLogger(module);
        var userUniqueCuid = req.user.uniqueCuid;
        var componentUniqueCuid = req.body.componentUniqueCuid;
        userDB.increaseQuantity(userUniqueCuid, componentUniqueCuid, error, error, success);

        function success(savedUser) {
            consoleLogger(successLogger(module));
            res.status(200).send({
                userData: savedUser
            });
        }

        function error() {
            consoleLogger(errorLogger(module));
            res.status(500).send({
                code: 500,
                notify: true,
                type: 'error',
                msg: "A problem occurred while adding that item to the cart. Please try again"
            });
        }
    },


    decreaseQuantity: function (req, res) {
        var module = 'decreaseQuantity';
        receivedLogger(module);
        var userUniqueCuid = req.user.uniqueCuid;
        var componentUniqueCuid = req.body.componentUniqueCuid;
        userDB.decreaseQuantity(userUniqueCuid, componentUniqueCuid, error, error, success);

        function success(savedUser) {
            consoleLogger(successLogger(module));
            res.status(200).send({
                userData: savedUser
            });
        }

        function error() {
            consoleLogger(errorLogger(module));
            res.status(500).send({
                code: 500,
                notify: true,
                type: 'error',
                msg: "A problem occurred while adding that item to the cart. Please try again"
            });
        }
    },


    removeFromCart: function (req, res) {
        var module = 'removeFromCart';
        receivedLogger(module);
        var userUniqueCuid = req.user.uniqueCuid;
        var componentUniqueCuid = req.body.componentUniqueCuid;
        userDB.removeFromCart(userUniqueCuid, componentUniqueCuid, error, error, success);

        function success(savedUser) {
            consoleLogger(successLogger(module));
            res.status(200).send({
                userData: savedUser,
                notify: true,
                type: 'success',
                msg: "Cart updated"
            });
        }

        function error() {
            consoleLogger(errorLogger(module));
            res.status(500).send({
                code: 500,
                notify: true,
                type: 'error',
                msg: "A problem occurred while removing that item to the cart. Please try again"
            });
        }
    }

};