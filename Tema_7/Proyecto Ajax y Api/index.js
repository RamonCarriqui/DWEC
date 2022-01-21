// API KEY
// 4045049d


$(document).ready(function () {
    $('input[type=submit]').on("click", buscar);
});


function buscar() {
    // Creo un DIV
    $('body').append('<div id="divBody"></div>'); // Creamos el div en el body con append
    // $('#divBody').css({ // Añadimos propiedades al DIV
    //     'background-color': 'cyan',
    //     'margin-top': '60px',
    //     'width': '100%',
    //     'height': '600px'
    // })

    var mibusqueda = $('#nombre').val(); // Almaceno el valor del input y lo paso después en el link de la búsqueda
    var numeroPagina = 1;

    $.get("https://www.omdbapi.com/?s=" + mibusqueda + "&apikey=4045049d&page=" + numeroPagina + "", function (datos) {

        for (let dato of datos.Search) {
            console.log(dato.Title);
            let div_pelicula = $('<div id="pelicula"></div>');
            let titulo = $(`<h1>${dato.Title}</h1>`);
            let ano = $(`<h3>${dato.Year}</h3>`);
            let img = $('<img>');
            img.attr('src', dato.Poster);
            div_pelicula.append(titulo, ano, img); // Se añaden al div_pelicula todos los datos

            $("#divBody").append(div_pelicula);
        }
    });



};


