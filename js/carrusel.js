var i = 1;  // control de las imágenes
var totalImagenes = 7;  // total de imágenes en el carrusel
var intervalo;

function carrusel() {
    document.getElementById('banner').src = `./img/banner${i}.jpg`;
    actualizarDots();
    i++;
    if (i > totalImagenes) {
        i = 1;
    }
}

function cambiarImagen(direccion) {
    // Detener el carrusel automático temporalmente
    clearInterval(intervalo);
    
    i += direccion;
    
    if (i > totalImagenes) {
        i = 1;
    } else if (i < 1) {
        i = totalImagenes;
    }
    
    document.getElementById('banner').src = `./img/banner${i}.jpg`;
    actualizarDots();
    
    // Reiniciar el carrusel automático
    iniciarCarrusel();
}

function irAImagen(numero) {
    // Detener el carrusel automático temporalmente
    clearInterval(intervalo);
    
    i = numero;
    document.getElementById('banner').src = `./img/banner${i}.jpg`;
    actualizarDots();
    
    // Reiniciar el carrusel automático
    iniciarCarrusel();
}

function actualizarDots() {
    var dots = document.getElementsByClassName('dot');
    for (var j = 0; j < dots.length; j++) {
        dots[j].classList.remove('active');
    }
    if (dots[i - 1]) {
        dots[i - 1].classList.add('active');
    }
}

function iniciarCarrusel() {
    intervalo = setInterval(carrusel, 3000);  // Cambia cada 3 segundos
}

// Iniciar el carrusel cuando cargue la página
window.onload = function() {
    actualizarDots();
    iniciarCarrusel();
}
