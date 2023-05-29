/* window.addEventListener('load', function() {
    var pantallaCarga = document.getElementById('pantalla-carga');
    pantallaCarga.style.display = 'none';
  }); */

  window.addEventListener('load', function() {
    var pantallaCarga = document.getElementById('pantalla-carga');
    
    // Establecer un retraso de 3 segundos (3000 milisegundos) antes de ocultar la pantalla de carga
    setTimeout(function() {
      pantallaCarga.style.display = 'none';
    }, 6000);
  });