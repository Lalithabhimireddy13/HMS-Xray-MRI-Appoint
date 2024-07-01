const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    type: String,
    subtype: String,
    paymentMethod: String,
    confirmation: Boolean,
    userDetails: {
        name: String,
        age: Number,
        email: String,
        phoneNumber: String
    },
    appointmentDetails: {
        date: Date,
        time: String,
        // Add other details as needed
    }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
