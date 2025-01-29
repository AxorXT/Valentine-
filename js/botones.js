// Obtener los elementos del DOM
const siBtn = document.getElementById('siBtn');
const noBtn = document.getElementById('noBtn');
const imagen = document.getElementById('imagen');
const gif1 = document.getElementById('gif1');
const gif2 = document.getElementById('gif2');
const texto = document.getElementById('texto');

// Listas de imágenes, GIFs y textos para cada botón
const siOpciones = [
    { img: 'img/jokeis.jpeg', text: 'TE AMOOOOO!! 🐣❤️', gif: 'img/kirbyapa.gif' },
    { img: 'img/perro.jpeg', text: 'Te voy a dar unos besos ❤️', gif: 'img/kirbyfeli.gif' },
    { img: 'img/menu.jpeg', text: '❤️ TE AMOOOOO MUCHISIMOOOO!! 💕', gif: 'img/kirbyyei.gif' }
];

const noOpciones = [
    { img: 'img/gatoxd.jpg', text: '🥸 WTF? ¿Poque no? 😰', gif: 'img/kirbywat.gif' },
    { img: 'img/wtf.jpeg', text: 'Ese boton solo es para fines ilustrativos 🥹', gif: 'img/kirbycu.gif' },
    { img: 'img/tite.jpeg', text: '¿De verdad no quieres? 😭', gif: 'img/kirbycry.gif' }
];

// Contadores para alternar entre opciones
let siIndex = 0;
let noIndex = 0;

// Función para cambiar cuando se presiona "Sí"
siBtn.addEventListener('click', () => {
    const opcion = siOpciones[siIndex];

    // Cambiar la imagen, texto y GIFs
    imagen.src = opcion.img;
    texto.textContent = opcion.text;
    gif1.src = opcion.gif;
    gif2.src = opcion.gif;

    // Avanzar al siguiente elemento de la lista (cíclico)
    siIndex = (siIndex + 1) % siOpciones.length;
});

// Función para cambiar cuando se presiona "No"
noBtn.addEventListener('click', () => {
    const opcion = noOpciones[noIndex];

    // Cambiar la imagen, texto y GIFs
    imagen.src = opcion.img;
    texto.textContent = opcion.text;
    gif1.src = opcion.gif;
    gif2.src = opcion.gif;

    // Avanzar al siguiente elemento de la lista (cíclico)
    noIndex = (noIndex + 1) % noOpciones.length;
});
