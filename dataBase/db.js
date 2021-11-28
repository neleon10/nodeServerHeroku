
//conexión a base de datos
const mongoose = require('mongoose');

const uri = process.env.URI;


mongoose.connect(uri, 
{ useNewUrlParser: true, useUnifiedTopology: true })

  .then(()=> console.log('conectado Carlanga a mongodb')) 
  .catch(e => console.log('error de conexión', e))

module.exports = mongoose;