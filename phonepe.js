const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
router.post('/phonepe', async (req, res) => {
    try {
        const { phoneNumber } = req.body;

        // Validate PhonePe number format
        const phonePeRegex = /^[0-9]{10}@[a-zA-Z]{3}\.[a-zA-Z]{3}$/;
        if (!phonePeRegex.test(phoneNumber)) {
            return res.status(400).json({ error: 'Invalid PhonePe number format.' });
        }

        // Calculate total amount after discount (2% off)
        const discountAmount = amount * 0.02;
        const totalAmount = amount - discountAmount;

        // If validation is successful and discount applied, you can proceed with further logic
        res.status(200).json({ success: true, totalAmount });
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error.' });
    }
});

module.exports = router;
