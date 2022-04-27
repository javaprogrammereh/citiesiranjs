const mongoose = require('mongoose');

const citiesSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 255,
    },
    ostan:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Ostan",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
citiesSchema.index({name:"text"});

module.exports = mongoose.model("City",citiesSchema);