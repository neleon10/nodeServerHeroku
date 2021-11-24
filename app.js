//server
const express = require ('express');
const app = express();

//port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Escuchandote Carlanga en el puerto ${ PORT }`);
});



//motor de plantillas // se configura diferente en EJS o HBS
app.set('views',__dirname + '/views');
app.set ('view engine','ejs');


//DECLARO CARPETA "PUBLIC" PARA ARCHIVOS ESTATICOS
app.use(express.static(__dirname + "/public"));

//calling router module / rutasWEB --> sirve modular cuando tenemos muchas rutas. 
app.use('/',require('./router/rutasWeb'));
app.use ('/mascotas',require('./router/mascotas'));



//middleware con RENDER
    app.use((req, res, next) => {
    // res.status(404)
    res.status(404).render('404',{
        nombre:'Carlos Vazquez'
    });
  }); 