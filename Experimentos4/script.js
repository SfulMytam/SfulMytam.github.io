function abrirmodal() {
  document.getElementById('btn-mapa').style.display='flex';
  document.body.classList.add('no-scroll');
}
function cerrarmodal() {
  document.getElementById('btn-mapa').style.display='none';
  document.body.classList.remove('no-scroll');
}


const captionText = document.getElementById('caption');
const cerrar = document.getElementsByClassName('cerrar')[0];
const imagenes = document.getElementsByClassName('imagenes-01');


for (let i = 0; i < imagenes.length; i++) {
  imagenes[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    document.body.classList.add('no-scroll');
  }
}

// Cerrar el modal al hacer clic en el botón de cerrar
cerrar.onclick = function() { 
  modal.style.display = "none";
  document.body.classList.remove('no-scroll');
}

// Cerrar el modal al hacer clic fuera de la imagen
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.classList.remove('no-scroll');
  }
}

let indiceActual = 0;

function mostrarImagen() {
  const carrusel = document.querySelector('.imagenes');
  carrusel.style.transform = `translateX(-${indiceActual * 100}%)`;

  // Actualiza los puntos indicadores
  document.querySelectorAll('.indicadores .punto').forEach((punto, indice) => {
    punto.classList.toggle('active', indice === indiceActual);
  });
}

function cambiarImagen(direccion) {
  const cantidadImagenes = document.querySelectorAll('.contenedor-imagen01').length;
  indiceActual = (indiceActual + direccion + cantidadImagenes) % cantidadImagenes;
  mostrarImagen();
}

function seleccionarImagen(indice) {
  indiceActual = indice;
  mostrarImagen();
}

// Inicializa el carrusel con la primera imagen activa
mostrarImagen();


const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalClose = document.getElementById('modalClose');
const zoomableImages = document.querySelectorAll('.imagenes');

zoomableImages.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
  });
});

// Cerrar el modal
modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Cerrar el modal haciendo clic fuera de la imagen
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});