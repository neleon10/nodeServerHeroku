
//CREANDO SERVER CON NODE

const http = require('http');

const carlosserver = http.createServer((req, res) => {
    res.end('Estoy respondiendote ahora con NODEMON');
});

//Puerto
const puertito = 3000; 
//Server listening
carlosserver.listen(puertito,()=>{
    console.log('Escuchandote carlos!');
});

//Se instalará NODEMON para que no haya que detener el SERVER cada vez que se 
//-->realiza un cambio. 