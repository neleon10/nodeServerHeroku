const express = require ('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Escuchando en puerto ${ PORT }`);
});



//motor de plantillas // se configura diferente en EJS o HBS
app.set('views',__dirname + '/views');
app.set ('view engine','ejs');


//DECLARO CARPETA "PUBLIC" PARA ARCHIVOS ESTATICOS
app.use(express.static(__dirname + "/public"));

//RENDERIZADO DE PLANTILLAS
app.get('/',(req,res)=>{
    res.render('index',{
        nombre:'Carlos Vazquez'
    });
});
app.get('/servicios',(req,res)=>{
    res.render('servicios',{
        nombre:'Carlos Vazquez'
    });
});
app.get('/elements',(req,res)=>{
    res.render('elements',{
        nombre:'Carlos Vazquez'
    })
});

//SERVER EN ESCUCHA
/* app.listen(port, ()=>{
    console.log('Escuchando');
}); */


//middleware con RENDER
    app.use((req, res, next) => {
    // res.status(404)
    res.status(404).render('404',{
        nombre:'Carlos Vazquez'
    });
  }); 