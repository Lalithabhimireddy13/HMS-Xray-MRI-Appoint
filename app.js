const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const routes = require('./routes');
const indexRouter = require('./routes/index');
const scansRouter = require('./routes/scans');
const xraysRouter = require('./routes/xrays');
const phonePeRouter = require('./routes/phonepe');
const googlePayRouter = require('./routes/googlepe');
const creditCardRouter = require('./routes/creditcard');
const debitCardRouter = require('./routes/debitcard');
const paymentRouter = require('./routes/payment');
const confirmRouter = require('./routes/confirm');
// Importing appointment model
const Appointment = require('./models/Appointment');
const { generateRandomDateTime }= require('./utils');
//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
// Connect to MongoDB
mongoose.set("strictQuery",false);
mongoose.connect('mongodb://localhost:27017/appointmentSchema')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));


// Use routes
//app.use('/', routes);
app.use('/', indexRouter);
app.use('/scans', scansRouter);
app.use('/xrays', xraysRouter);
app.use('/payment', paymentRouter);
app.use('/confirm', confirmRouter);
app.use('/', phonePeRouter);
app.use('/', googlePayRouter);
app.use('/', creditCardRouter);
app.use('/', debitCardRouter);

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index', {
        scans: ['Scan Option 1', 'Scan Option 2', 'Scan Option 3'], // Example data for scanning options
        xrays: ['X-ray Option 1', 'X-ray Option 2', 'X-ray Option 3'] // Example data for X-ray options
    });
});

app.get('/scans', (req, res) => {
    const selectedType = req.query.type; // Retrieve the selected scanning type
    // Render a page with types of scanning based on the selected type
    res.render('scans', { selectedType });
});

app.get('/xrays', (req, res) => {
    const selectedType = req.query.type; // Retrieve the selected X-ray type
    // Render a page with types of X-rays based on the selected type
    res.render('xrays', { selectedType });
});
app.get('/book', (req, res) => {
    const subType = req.query.subType; // Retrieve the selected sub-type
    const cost = req.query.cost; // Retrieve the cost
    // Render a page with booking details based on the selected sub-type and cost
    res.render('book', { subType, cost });
});
app.get('/payment', (req, res) => {
    const subType = req.query.subType; // Retrieve the selected sub-type
    const cost = req.query.cost; // Retrieve the cost
    // Render a page with payment details based on the selected sub-type and cost
    res.render('payment', { subType, cost });
});
app.post('/details', (req, res) => {
    const { name, age, email, phone } = req.body; // Retrieve user details from form submission
    // Render a page to confirm user details
    res.render('details', { name, age, email, phone });
});
app.get('/payment_options', (req, res) => {
    // Render the payment options page
    //res.render('payment_options');
    res.render('payment_options');
});
app.get('/phonepe', (req, res) => {
    const originalCost = 100; // Example original cost
    const discount = 0.02; // 2% discount for PhonePe
    const discountedCost = originalCost - (originalCost * discount);
    // Pass the cost details to the payment page
    res.render('phonepe', { originalCost, discount, discountedCost });
});

app.get('/googlepay', (req, res) => {
    // Render the Google Pay payment page
    res.render('googlepay');
});

app.get('/creditcard', (req, res) => {
    const originalCost = 100; // Example original cost
    const discount = 0.05; // 5% discount for credit card
    const discountedCost = originalCost - (originalCost * discount);
    // Pass the cost details to the payment page
    res.render('creditcard', { originalCost, discount, discountedCost });
});

app.get('/debitcard', (req, res) => {
    // Render the Debit Card payment page
    res.render('debitcard');
});


app.get('/confirm', (req, res) => {
    const appointmentDetails = {
        date: generateRandomDateTime(),
        time: generateRandomDateTime()
    };
    // Render the confirmation page with appointment details
    res.render('confirm', { appointmentDetails });
});


app.get('/cancel', (req, res) => {
    // Render the cancellation page
    res.render('cancel');
});

// Define mongoose schema and models for scanning and X-ray options if needed
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
