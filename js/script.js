// Obtener los elementos del DOM
const siBtn = document.getElementById('siBtn');
const noBtn = document.getElementById('noBtn');
const imagen = document.getElementById('imagen');
const gif1 = document.getElementById('gif1');
const gif2 = document.getElementById('gif2');
const texto = document.getElementById('texto');

// Función para cambiar a lo que pasa cuando se presiona "Sí"
siBtn.addEventListener('click', () => {
    // Cambiar la imagen y texto
    imagen.src = 'img/jokeis.jpeg';  // Cambiar la imagen
    texto.textContent = 'TE AMOOOOO!! 🐣❤️';  // Cambiar el texto del h1

    // Cambiar los GIFs
    gif1.src = 'img/baile.gif';  // Cambiar el primer GIF
    gif2.src = 'img/baile.gif';  // Cambiar el segundo GIF
});

// Función para cambiar a lo que pasa cuando se presiona "No"
noBtn.addEventListener('click', () => {
    // Cambiar la imagen y texto
    imagen.src = 'img/gatoxd.jpg';  // Cambiar la imagen
    texto.textContent = '🥸 WTF? poque no? 😰';  // Cambiar el texto del h1

    // Cambiar los GIFs
    gif1.src = 'img/kirbysad.png';  // Cambiar el primer GIF
    gif2.src = 'img/kirbysad.png';  // Cambiar el segundo GIF
});
