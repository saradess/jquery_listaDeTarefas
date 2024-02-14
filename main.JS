$(document).ready(function() {
    $('#lista-de-tarefas').submit(function(event) {
        event.preventDefault();
        
        const novaTarefa = $('#tarefa').val();
        
        if (novaTarefa.trim() !== '') {
            $('#lista').append('<li>' + novaTarefa + '</li>');
            $('#tarefa').val('');
        }
});
});

$(document).ready(function(){
    $('#lista').on('click','li',function(){
        $(this).toggleClass('riscado');
    });
});