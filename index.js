const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
// Assuming you have an array of scans and xrays
const scans = ['Scan 1', 'Scan 2', 'Scan 3']; // Replace with your actual data
const xrays = ['X-ray 1', 'X-ray 2', 'X-ray 3']; // Replace with your actual data

router.get('/', (req, res) => {
    res.render('index', { scans: scans, xrays: xrays });
});
router.post('/appointment', async (req, res) => {
    try {
        const { type, subtype, paymentMethod, confirmation, userDetails, appointmentDetails } = req.body;
        const appointment = new Appointment({
            type: type,
            subtype: subtype,
            paymentMethod: paymentMethod,
            confirmation: confirmation,
            userDetails: userDetails,
            appointmentDetails: appointmentDetails
        });
        await appointment.save();
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error saving appointment:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
