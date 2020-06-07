const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const app = express();

const transactions = require('./routes/transactions');

dotenv.config({ path: './config/config.env'});

app.get('/', (req, res) => res.send('Hello'));

app.use('/api/v1/transactions', transactions);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running in ${process.env.NODE_ENVIOURMENT} mode`);
});
