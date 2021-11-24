const express = require('express');
const router = express.Router();
const db = require ('../dataBase/db');

//RENDERIZADO DE PLANTILLAS
router.get('/',(req,res)=>{
    res.render('index',{
        nombre:'Carlos Vazquez'
    });
});
router.get('/servicios',(req,res)=>{
    res.render('servicios',{
        nombre:'Carlos Vazquez'
    });
});
router.get('/elements',(req,res)=>{
    res.render('elements',{
        nombre:'Carlos Vazquez'
    })
});
module.exports=router;