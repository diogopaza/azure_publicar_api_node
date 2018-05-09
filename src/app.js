const bodyParser = require("body-parser");


const express = require('express');
const app = express();
const router = express.Router();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

const index = require('./routes/index');
const personRoute = require('./routes/personRoute');

app.use('/', index);
app.use('/persons', personRoute);

module.exports = app;