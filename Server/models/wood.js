const mongoose = require('mongoose')

const woodScheme = mongoose.Schema({
    name: {
        required: true,
        type: String,
        unique: 1,
        maxlength: 100
    }
})

const Wood = mongoose.model('Wood', woodScheme)

module.exports = { Wood }
