const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
router.post('/appointment', async (req, res) => {
    try {
        // Extract appointment data from request body
        const { appointmentDate } = req.body;

        // Assuming you want to save appointment data into MongoDB
        // Create a new document using the Appointment model and save it
        const appointment = new Appointment({
            appointmentDate: appointmentDate
        });
        await appointment.save();

        res.status(200).json({ success: true });
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error.' });
    }
});

module.exports = router;
