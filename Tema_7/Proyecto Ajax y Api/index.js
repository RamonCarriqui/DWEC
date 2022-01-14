// API KEY
// 4045049d


$(document).ready(function () {
    $('input[type=submit]').on("click", buscar);
});


function buscar() {
    // Creo un DIV
    $('body').append('<div id="divBody"></div>'); // Creamos el div en el body con append
    $('#divBody').css({ // Añadimos propiedades al DIV
        'background-color': 'cyan',
        'margin-top': '60px',
        'width': '100%',
        'height': '600px'
    })

    var mibusqueda = $('#nombre').val(); // Almaceno el valor del input y lo paso después en el link de la búsqueda
    var numeroPagina = 1;

    $( "#divBody" ).load( "https://www.omdbapi.com/?s="+mibusqueda+"&apikey=4045049d&page="+numeroPagina+"", function() {
        // Falta maquetar lo que se devuelve
      });
    
};


