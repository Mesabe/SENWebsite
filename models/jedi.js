const mongoose = require('mongoose')

const jediSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
    },

    force: {
        type: Number,
        min: 1,
        max: 10,
        required: true,
        
    },
    position: {
        type: String,
        select: ['Grand Master','Jedi Master','Jedi Knight','Padowan'],
        default: 'Padowan',
        
    }

})

module.exports = mongoose.model('Jedi',jediSchema)