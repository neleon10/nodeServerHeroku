const express = require('express');
const router = express.Router();
const pet = require ('../models/mascota')


//READ
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


//Create

router.get('/crear',(req, res)=>{

    res.render('crear',{
        nombre:'Carlos Vazquez',
        nombresolapa:'Crear Mascota'
    });
})
//Create
router.post('/', async(req,res)=>{
    const body = req.body
    try {
        await pet.create(body)//Se usa PET, porque creo otro MODEL con esas caracteristicas. 
        res.redirect('mascotas')
    } catch (err) {
        console.log(err)
    }
})

//

module.exports = router;