$(document).ready(function () {
    $('#iniciar').on('click', function () {
        $('body').append('<div id="divBody"></div>'); // Creamos el div en el body con append
        $('#divBody').css({ // Añadimos propiedades al DIV
            'background-color': 'cyan',
            'margin-top':'10px',
            'width': '40px',
            'height': '40px'
        });

        $('#divBody').animate({marginLeft: "+=400px"}, 1500); // Añadimos movimiento al DIV a la izquierda 200px
        setTimeout(function(){
            $('#divBody').css('background-color','blue'); // Uso setTimeout para evitar que se cambie el color antes de tiempo

        },1500)
        $('#divBody').animate({height: "0px"}, "slow"); // Elimino la altura para hacer el efecto de desvancecerse
    })

    $('#stop').on('click', function () {
        $('#divBody').stop(true);
    })
});


