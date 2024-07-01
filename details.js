const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
router.post('/details', async (req, res) => {
    try {
        // Extract details data from request body
        const { name, age, email, phoneNumber } = req.body;

        // Assuming you want to save details data into MongoDB
        // Create a new document using the Appointment model and save it
        const appointment = new Appointment({
            name: name,
            age: age,
            email: email,
            phoneNumber: phoneNumber
        });
        await appointment.save();

        res.status(200).json({ success: true });
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error.' });
    }
});

module.exports = router;
