
// Para que el header desaparezca al bajar y aparezca al subir;
let lastScrollTop = 0;

window.addEventListener("scroll", function() {
  let currentScroll = document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scroll hacia abajo
    document.querySelector('.fixed-header').classList.add('hide');
  } else {
    // Scroll hacia arriba
    document.querySelector('.fixed-header').classList.remove('hide');
  }
  
  if (currentScroll <= 0){  
    lastScrollTop = 0;
  }else{
    lastScrollTop = currentScroll
  }

});



