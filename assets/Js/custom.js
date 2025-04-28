
function agregarAlCarrito(nombre, precio) {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  carrito.push({ nombre, precio });
  localStorage.setItem("carrito", JSON.stringify(carrito));
  alert("Producto agregado al carrito.");

  actualizarCantidadCarrito();

  const botonCarrito = document.getElementById("boton-carrito");
  if (botonCarrito) {
    botonCarrito.classList.add("rebote");
    setTimeout(() => botonCarrito.classList.remove("rebote"), 600);
  }
}

function actualizarCantidadCarrito() {
  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const cantidadElemento = document.getElementById("cantidad-carrito");
  if (cantidadElemento) {
    cantidadElemento.textContent = carrito.length;
  }
}

document.addEventListener('DOMContentLoaded', actualizarCantidadCarrito);
