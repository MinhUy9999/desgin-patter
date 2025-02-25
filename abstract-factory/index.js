require('dotenv').config();
const express = require('express');
require('./src/config/db');
const product = require('./src/routes/product');

const app = express();
const PORT = process.env.PORT;


// Routes
app.use('/api', product);

app.get('/', (req, res) => {
    res.send('Product Management API is running');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});