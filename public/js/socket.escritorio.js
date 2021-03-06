var socket = io();
var searchParams = new URLSearchParams(window.location.search);
if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}
var escritorio = searchParams.get('escritorio');

console.log(escritorio);


$('button').on('click', function () {
    socket.emit('atenderTicket', {escritorio:escritorio},function (resp){
        console.log('respuestas', resp);
        if(resp === 'No hay tickets'){
            $('small').text('Ya no hay tickets');
            alert(resp);
            return;
        }
        $('small').text(`Ticket ${resp.numero}`);

    });
});