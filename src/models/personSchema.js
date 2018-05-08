const mongoose =  require('../../bin/db');


const schema = {
    
     nome: String,
     idade: Number
 }

 module.exports = new mongoose.Schema( schema );
 

 

     
 