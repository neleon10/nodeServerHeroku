
//conexión a base de datos
const mongoose = require('mongoose');
const user = 'neleon10';
const password = 'grr3LblsLBfWCZYs';
const dbname = 'veterinaria'
const uri = `mongodb+srv://${user}:${password}@cvncluster.lvl6u.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri, 
{ useNewUrlParser: true, useUnifiedTopology: true })

  .then(()=> console.log('conectado Carlanga a mongodb')) 
  .catch(e => console.log('error de conexión', e))

module.exports = mongoose;