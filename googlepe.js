const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
router.post('/googlepay', async (req, res) => {
    try {
        const { gpayNumber } = req.body;

        // Validate Google Pay number format
        const googlePayRegex = /^[0-9]{10}@[a-zA-Z]{3}\.[a-zA-Z]{3}$/;
        if (!googlePayRegex.test(gpayNumber)) {
            return res.status(400).json({ error: 'Invalid Google Pay number format.' });
        }

        // If validation is successful, you can proceed with further logic

        res.status(200).json({ success: true });
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error.' });
    }
});

module.exports = router;
