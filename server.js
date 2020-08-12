const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

const MONGO_DB_URI = 'mongodb+srv://user:BMWM3GTR@cluster0.ebjz1.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority';
mongoose.connect(MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Connected!');
});

//HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);

app.listen(PORT, console.log('server has been started at:'+PORT));