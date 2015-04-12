var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var componentSchema = new Schema({
    name: {type: String, required: true, unique: false, index: true},
    school: {type: String, default: "", unique: false, index: true},
    componentGroup: {type: String, required: true, unique: false, index: true},
    componentIndex: {type: Number, required: true, unique: true, index: true},
    componentUniqueCuid: {type: String, required: true, unique: true, index: true},
    totalOrders: {type: Number, default: 0, required: true, unique: false, index: true},
    totalRates: {type: Number, default: 0, required: true, unique: false, index: true},
    rateSum: {type: Number, default: 0, required: true, unique: false, index: true}
});

module.exports = componentSchema;