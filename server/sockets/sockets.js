const {io} = require('../server')
io.on('connection', (client)=>{
    console.log('Usuario coenctado');
    client.emit('enviarMensaje',{
        usuario:'Admin',
        mensaje:'bienvenido a esta plicación'
    });
    client.on('disconnect', ()=>{
        console.log('usuario desconectado');
    });
    //escuchar el cliente
    client.on('enviarMensaje',(data,callback)=>{
        console.log(data);
        client.broadcast.emit('enviarMensaje',data);
        // if(mensaje.usuario){
        //     callback({
        //         resp:'TODO SALIÓ BIEN!'
        //     });
        // }else{
        //     callback({
        //         resp:'TODO SALIÓ MAL!'
        //     });
        // }
    });

});
