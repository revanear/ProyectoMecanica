// 1. Buscamos el botón y la tabla en el HTML usando sus "id"
const boton = document.getElementById("botonTabla");
const tabla = document.getElementById("miTabla");

// 2. Cuando alguien haga clic en el botón...
boton.addEventListener("click", function () {
  // ...le quitamos o le ponemos la clase "oculto" a la tabla
  tabla.classList.toggle("oculto");
});


function mostrarCaso(numeroCaso, botonPresionado) {
  // 1. Ocultamos todos los paneles de casos
  const paneles = document.querySelectorAll('.panel-caso');
  paneles.forEach(panel => panel.classList.add('oculto'));

  // 2. Quitamos el color activo de todos los botones
  const botones = document.querySelectorAll('.btn-caso');
  botones.forEach(btn => btn.classList.remove('activo'));

  // 3. Mostramos el caso elegido y resaltamos su botón
  document.getElementById('contenido-caso-' + numeroCaso).classList.remove('oculto');
  botonPresionado.classList.add('activo');
}
