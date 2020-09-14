// comando para establecer nueva comunicación
var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', function (){
    console.log('conectado al servidor')
});

socket.on('disconnect', function (){
    console.log('Desconectado del servidor')
});

$('button').on('click',function (){
    console.log('click');
    socket.emit('siguienteTicket',null,function (siguienteTicket){
        label.text(siguienteTicket);
    });
});

// on 'estadoActual' listener para la unción anterior
socket.on('estadoActual',function (resp){
    console.log(resp);
    label.text(resp.actual);
});