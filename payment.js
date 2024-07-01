const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');

router.post('/payment', async (req, res) => {
    try {
        const { paymentMethod } = req.body;
        const appointment = new Appointment({
            paymentMethod: paymentMethod,
        });
        await appointment.save();
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
