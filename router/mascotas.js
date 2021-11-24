const express = require('express');
const router = express.Router();
const pet = require ('../models/mascota')



router.get('/', async (req, res) => {

    try{

        const arrayPets = await pet.find()
        
        res.render('mascotas', {
            arrayPets:arrayPets  
        });
        
    }catch (err) {
        console.log(err)
    }
   
});


module.exports = router;