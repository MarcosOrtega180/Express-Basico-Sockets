const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');

const app = express();//configuramos para trabajar con servidor http que trae por defecto node, es necesario para socketIO
let server = http.createServer(app);
const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
//en io los on sirven para escuchar eventos
// los in emit sirven para enviar información
// IO = esta es la comunicación del backend para con los clientes, aquí sabemos cuando el cliente se conecta al servidor
module.exports.io = socketIO(server);
require('./sockets/sockets');
// aquí el servidor sabe cuando se conecta el cliente




// app.listen(port, (err) => {
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});
