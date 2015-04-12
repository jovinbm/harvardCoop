var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
    orderUniqueCuid: {type: String, required: true, unique: true, index: true},
    orderIndex: {type: Number, default: 0, required: true, unique: true, index: true},
    clientUniqueCuid: {type: String, required: true, unique: false, index: true},
    clientSocketRoom: {type: String, required: true, unique: false, index: true},
    billingAddress: {
        clientEmail: {type: String, required: true, unique: false, index: true},
        clientUsername: {type: String, required: true, unique: false, index: true},
        clientFullName: {type: String, required: true, unique: false, index: true},
        clientAddress: {type: String, required: true, unique: false, index: true},
        clientCity: {type: String, required: true, unique: false, index: true},
        clientZipPostalCode: {type: String, required: true, unique: false, index: true},
        clientCountry: {type: String, required: true, unique: false, index: true},
        clientProvinceState: {type: String, required: true, unique: false, index: true},
        clientPhoneNumber: {type: String, required: true, unique: false, index: true},
        clientFax: {type: String, unique: false, index: true}
    },
    shippingAddress: {
        clientEmail: {type: String, required: true, unique: false, index: true},
        clientUsername: {type: String, required: true, unique: false, index: true},
        clientFullName: {type: String, required: true, unique: false, index: true},
        clientAddress: {type: String, required: true, unique: false, index: true},
        clientCity: {type: String, required: true, unique: false, index: true},
        clientZipPostalCode: {type: String, required: true, unique: false, index: true},
        clientCountry: {type: String, required: true, unique: false, index: true},
        clientProvinceState: {type: String, required: true, unique: false, index: true},
        clientPhoneNumber: {type: String, required: true, unique: false, index: true},
        clientFax: {type: String, unique: false, index: true}
    },
    orderTime: {type: Date, default: Date.now, unique: false, required: true, index: true},
    readyTime: {type: Date, unique: false, index: true},
    declineTime: {type: Date, unique: false, index: true},
    status: {type: String, default: "received", required: true},
    orderComponents: {type: Array, "default": [], unique: false, index: true},
    processedOrderComponents: {type: Array, "default": [], unique: false, index: true}
});

module.exports = orderSchema;