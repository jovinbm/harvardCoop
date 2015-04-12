var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    openId: {type: String, default: "", index: true},
    uniqueCuid: {type: String, required: true, unique: true, index: true},
    isAdmin: {type: String, required: true, default: "no", index: true},
    firstName: {type: String, default: "", unique: false, index: true},
    lastName: {type: String, default: "", unique: false, index: true},
    fullName: {type: String, default: "", unique: false, index: true},
    username: {type: String, default: "", unique: false, index: true},
    password: {type: String, default: "", unique: false, index: true},
    loggedInIndex: {type: Number, default: 0, unique: false, index: true},
    billingAddress: {
        email: {type: String, default: "", unique: false, index: true},
        username: {type: String, default: "", unique: false, index: true},
        fullName: {type: String, default: "", unique: false, index: true},
        address: {type: String, default: "", unique: false, index: true},
        city: {type: String, default: "", unique: false, index: true},
        zipPostalCode: {type: String, default: "", unique: false, index: true},
        country: {type: String, default: "", unique: false, index: true},
        provinceState: {type: String, default: "", unique: false, index: true},
        phoneNumber: {type: String, default: "", unique: false, index: true},
        fax: {type: String, default: "", unique: false, index: true}
    },
    shippingAddress: {
        email: {type: String, default: "", unique: false, index: true},
        username: {type: String, default: "", unique: false, index: true},
        fullName: {type: String, default: "", unique: false, index: true},
        address: {type: String, default: "", unique: false, index: true},
        city: {type: String, default: "", unique: false, index: true},
        zipPostalCode: {type: String, default: "", unique: false, index: true},
        country: {type: String, default: "", unique: false, index: true},
        provinceState: {type: String, default: "", unique: false, index: true},
        phoneNumber: {type: String, default: "", unique: false, index: true},
        fax: {type: String, default: "", unique: false, index: true}
    },
    cart: {type: Array, "default": [], unique: false, index: true}
});

module.exports = userSchema;

//=======================CART FORMAT
//cart = Array of objects/items added to cart
//i.e [{
//  itemUniqueCuid
//    quantity:
//    addedDate:
// }]