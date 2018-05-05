const current = document.getElementById('current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.4;

// seteando opacidad a la primer imagen
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
    // resetear la opacidad
    imgs.forEach(img => (img.style.opacity = 1));
    
    // cambiar la imagen actual a la imagen clickeada
    current.src = e.target.src;

    // añadir la clase fade in
    current.classList.add('fade-in');

    // eliminar la clase fade in despues de 0.5s
    setTimeout(() => current.classList.remove('fade-in'),500);

    // cambiar la opacidad a la opacidad de la variable
    e.target.style.opacity = opacity;
} 