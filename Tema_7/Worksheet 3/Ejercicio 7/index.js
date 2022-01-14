$(document).ready(function () {
    $('#iniciar').on('click', function(){
        $('p').animate({height:'30px'},1500);
        $('p').animate({height:'500px'},3000);
        $('p').animate({height:'20px'},1500);
        $('p').animate({height:'40px'},1500);
    })


    $('#stop').on('click', function(){
        $('p').stop(true);
    })
});

