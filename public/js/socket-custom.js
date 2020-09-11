// definimos lo que queremos que se ejecute para y durante el envío al servidor
let socket = io();
socket.on('connect', function () {
    console.log('conectado al servidor')
});
socket.on('disconnect', function (resp) {
    console.log('Respuesta server', resp);
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Marcos',
    mensaje: 'Hola mundo'
},function (resp){
    console.log('respuesta server', resp)
});
//escuchamos información del servidor
socket.on('enviarMensaje', function (respuesta) {
    console.log('Info del servidor', respuesta);
});
