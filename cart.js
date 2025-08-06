const carrito = [];
const btnCarrito = document.getElementById("btn-carrito");
const carritoSidebar = document.getElementById("carrito");
const listaCarrito = document.getElementById("lista-carrito");
const totalCarrito = document.getElementById("total-carrito");
const cerrarCarritoBtn = document.getElementById("cerrar-carrito");
const finalizarCompraBtn = document.getElementById("finalizar-compra");

// ABRIR CARRITO
btnCarrito.addEventListener("click", () => {
  carritoSidebar.classList.add("mostrar");
});

// CERRAR CARRITO
cerrarCarritoBtn.addEventListener("click", () => {
  carritoSidebar.classList.remove("mostrar");
});

// AGREGAR AL CARRITO
document.querySelectorAll(".agregar-carrito").forEach(boton => {
  boton.addEventListener("click", () => {
    const nombre = boton.getAttribute("data-nombre");
    const precio = parseFloat(boton.getAttribute("data-precio"));
    const producto = { nombre, precio };
    carrito.push(producto);
    actualizarCarrito();
  });
});

// ACTUALIZAR VISTA DEL CARRITO
function actualizarCarrito() {
  listaCarrito.innerHTML = "";
  let total = 0;

  carrito.forEach((item, index) => {
    total += item.precio;
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.nombre} - $${item.precio.toLocaleString()}
      <button onclick="eliminarItem(${index})">Eliminar</button>
    `;
    listaCarrito.appendChild(li);
  });

  totalCarrito.textContent = total.toLocaleString();
}

// ELIMINAR ITEM
function eliminarItem(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
}

// FINALIZAR COMPRA
finalizarCompraBtn.addEventListener("click", () => {
  if (carrito.length === 0) {
    alert("El carrito está vacío");
    return;
  }
  alert("¡Gracias por tu compra! Nos pondremos en contacto pronto.");
  carrito.length = 0;
  actualizarCarrito();
  carritoSidebar.classList.remove("mostrar");
});


