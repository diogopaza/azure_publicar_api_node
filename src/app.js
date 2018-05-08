


const express = require('express');
const app = express();
const router = express.Router();

const index = require('./routes/index');
app.use('/', index);

const personRoute = require('./routes/personRoute');
app.use('/persons', personRoute);

module.exports = app;