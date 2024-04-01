function fechaPasada(fecha) {
    const fechaActual = new Date();
    const fechaLimite = new Date(fecha);
    return fechaLimite < fechaActual;
}
  
  // Función para ocultar los elementos cuya fecha límite haya pasado
function ocultarElementosPasados() {
    const elementos = document.querySelectorAll('[data-fecha]');
    elementos.forEach(elemento => {
        const fecha = elemento.getAttribute('data-fecha');
        if (fechaPasada(fecha)) {
        elemento.style.display = 'none'; // Oculta el elemento si la fecha ha pasado
        }
    });
}
  
  // Función para mostrar los elementos ocultos
function mostrarElementosOcultos() {
    const elementos = document.querySelectorAll('[data-fecha]');
    elementos.forEach(elemento => {
        elemento.style.display = ''; // Muestra el elemento
    });
}
  
  // Evento para ocultar elementos pasados al hacer clic en el botón
document.getElementById('botonOcultar').addEventListener('click', ocultarElementosPasados);
  
  // Evento para mostrar elementos ocultos al hacer clic en el botón
document.getElementById('botonMostrar').addEventListener('click', mostrarElementosOcultos);