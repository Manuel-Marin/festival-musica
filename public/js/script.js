//Smoot Scroll con Js Nativo
//$document.querySelectorAll('.navbar .navbar-link').forEach(enlace => {
   // enlace.addEventListener('click', (e) => {
       // e.preventDefault();
        
       // document.querySelector(enlace.getAttribute('href')).scrollIntoView({
      //      behavior: 'smooth'
    //    });
  //  });
//});


//smoot en jquery
smoothScroll.init({
    selector: '[data-scroll]',
    selectorHeader: null,
    speed: 1000,
    easing: 'easeInOutCubic',
    offset: 0,
    callback: function ( anchor, toggle ) {}
    });


//Cambia de color el fondo la hacer scroll
window.onscroll = function(e){
    const scroll = window.scrollY;
    const header = document.querySelector('#navegacion-principal');

    if(scroll > 300){
        header.classList.add('bg-success');
    }else{
      header.classList.remove('bg-success');
    }
}


//jquery countdown
$(document).ready(function(){
    $('#fecha').countdown('2019/06/07', function(evento){
        $(this).html(evento.strftime('<span> %D </span> Dias <span> %H </span> Horas <span> %M </span>  Minutos <span> %S </span> Segundos'));
    });
});