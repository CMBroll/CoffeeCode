const obtenerproductos = localStorage.getItem("productos");

const cartas = document.getElementById("cartas");

JSON.parse(obtenerproductos).forEach((producto) => {
  const carta = `
    <div class=" product-item" id="${producto.categoria}" style="width: 25rem;">
    <div class="box d-flex flex-column justify-content-between align-items-center p-3">
    <h3>${producto.nombre}</h3>
    <div class="d-flex imgAdapt">
            <img class=" img-fluid" src="${producto.url}" alt="">                      
        </div>
        <div class="d-flex mt-3 gap-2">
        <p>Precio:</p>
        <span class="font-weight-bold">$ ${producto.precio}</span>
    </div>
    <div class="d-flex flex-column anchoContenedorBoton">
        <button class="botonCarrito" id="botonAgregar">Agregar al carrito</button>
        <button class="botonCarrito">Mas información</button>
    </div>
    </div>
</div>
    `;





  cartas.innerHTML += carta;
});