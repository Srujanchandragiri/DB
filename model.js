const mongoose = require('mongoose');
const BrandNameSchema = mongoose.Schema({
    brandname: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('BrandName', BrandNameSchema);
