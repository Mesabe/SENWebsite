const mongoose = require('mongoose')

const jediSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
    },

    force: {
        type: Number,
        required: true,
        
    },
    position: {
        type: String,
        default: 'Padowan',
        
    }

})

module.exports = mongoose.model('Users',jediSchema)