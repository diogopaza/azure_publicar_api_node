var mongoose = require('mongoose');


dbURI = 'mongodb://localhost/test100';
mongoose.connect(dbURI);
db = mongoose.connection;
db.on('error', function(){
    console.log('Error ao conectar ao Mongoose');
});
db.on('open', function(){

    console.log('Mongoose esta conectado no banco: ' + dbURI)

})


module.exports = mongoose;