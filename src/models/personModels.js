const mongoose =  require('../../bin/db');
const Schema = require('./personSchema');


module.exports =  mongoose.model('Person', Schema); 

 