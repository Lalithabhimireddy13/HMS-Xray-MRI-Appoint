const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
router.post('/debitcard', async (req, res) => {
    try {
        const { cardNumber } = req.body;

        // Validate debit card number format
        const debitCardRegex = /^[0-9]{12}$/;
        if (!debitCardRegex.test(cardNumber)) {
            return res.status(400).json({ error: 'Invalid debit card number format.' });
        }

        // If validation is successful, you can proceed with further logic

        res.status(200).json({ success: true });
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error.' });
    }
});

module.exports = router;
