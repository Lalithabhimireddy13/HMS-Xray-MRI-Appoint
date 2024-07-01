const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

router.post('/xrays', async (req, res) => {
    try {
        // Check if there are more than 5 appointments already
        const existingAppointmentsCount = await Appointment.countDocuments({ type: 'xray' });
        if (existingAppointmentsCount >= 5) {
            return res.status(400).json({ error: 'Slots are fully booked.' });
        }

        // If less than 5 appointments, proceed to create a new one
        const { type } = req.body;
        const appointment = new Appointment({
            type: type,
        });
        await appointment.save();
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
