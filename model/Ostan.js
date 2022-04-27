const mongoose = require('mongoose');

const ostanSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 255,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
ostanSchema.index({name:"text"});

module.exports = mongoose.model("Ostan",ostanSchema);