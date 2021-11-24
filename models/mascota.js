const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//el esquema es como la estructura. Es una clase!

//contruyo la clase. 
const mascotaSchema = new Schema({
    nombrep:  String,
    description: String
});

// Crear el modelo / instancio la clase / creo objeto
//el nombre es el nombre de la tabla o coleccion en la DB veterinaria.
const pet = mongoose.model('mascotas', mascotaSchema);

module.exports = pet;

//Siempre se va a hacer un SCHEMA ya sea de cliente, usuario etc. Se hace una clase o SCHEMA. 
