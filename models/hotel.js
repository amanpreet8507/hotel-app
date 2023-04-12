const mongoose = require("mongoose")
const HotelSchema = mongoose.Schema({
    rooms: {
        type: Number,
        required: true
    },
    adults: {
        type: Number,
        required: true
    },
    children: {
        type: Number,
        required: true
    }
    
},{ 
    timestamps: true
})

const HotelModel = mongoose.model('Hotel', HotelSchema);
module.exports = HotelModel;