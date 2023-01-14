const mongoose = require("mongoose");

/* Creating a schema for the credit card. */
const customerCardSchema = mongoose.Schema( {
    cardNumber:{
        type: Number,
        required: true
    },
	placeHolderName: {
        type: String,
        required: true
    },
	expirationDate: {
        type: String,
        required: true
    },
	cvv:{
        type: Number,
        required: true
    },
	franchise: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("creditCart", customerCardSchema);