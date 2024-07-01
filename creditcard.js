const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
router.post('/creditcard', async (req, res) => {
    try {
        const { cardNumber } = req.body;

        // Validate credit card number format
        const creditCardRegex = /^[0-9]{12}$/;
        if (!creditCardRegex.test(cardNumber)) {
            return res.status(400).json({ error: 'Invalid credit card number format.' });
        }

        // If validation is successful, you can proceed with further logic

        res.status(200).json({ success: true });
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error.' });
    }
});

module.exports = router;
