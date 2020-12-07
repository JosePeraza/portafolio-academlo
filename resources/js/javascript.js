function showMenu() {
    document.getElementById('menu').classList.toggle('hide')
}

// Maestro, tengo en cuenta que este script utiliza jquery. Realize una investigacion para lograr el "efecto de salto" a cada seccion
// y aunque no se mueve fluidamente hacia ahi, funciona, por eso lo quise dejar. Espero no haya problema, ya que da un pequeño error 
// en la consola y es el unico que logre que funcionara.
$('#menubar ul li a').on('click',function(event){
    var $anchor = $(this);
    $('html, body').animate({
      scrollTop: $($anchor.attr('href')).offset().top + "px"
    }, 300);
     event.preventDefault();
 });