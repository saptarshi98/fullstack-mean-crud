
const mongoose = require('mongoose');

const formSchema = mongoose.Schema({
    firstName: {
        type:String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    
})

const formDB = mongoose.model('FormDatabase',formSchema);

module.exports = {formDB: formDB};
