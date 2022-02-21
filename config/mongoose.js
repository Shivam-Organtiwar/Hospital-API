const mongoose = require('mongoose');
const db = mongoose.connection;


db.on('error',console.error.bind('error!!'));
db.once('open',function(){ console.log('Successfully Connected To Database');});


module.exports = db;
