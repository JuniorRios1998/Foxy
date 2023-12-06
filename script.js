const imagenesGaleria = document.querySelectorAll('.galeria img');
let indiceImagen = 0;

function cambiarImagen() {
    imagenesGaleria.forEach(img => img.classList.remove('visible'));
    indiceImagen = (indiceImagen + 1) % imagenesGaleria.length;
    imagenesGaleria[indiceImagen].classList.add('visible');
}

setInterval(cambiarImagen, 3000);

