// Array en memoria — se carga al iniciar
let carrito = [];

// Lee el carrito de LocalStorage y lo mete en la variable
function loadCart() {
  carrito = JSON.parse(localStorage.getItem('carrito')) || [];
}

// Guarda el array actual en LocalStorage
function saveCart() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Añade un producto o suma cantidad si ya existe
function addToCart(producto) {
  const existe = carrito.find(
    item => item.camisetaId === producto.camisetaId &&
            item.talla === producto.talla &&
            item.color === producto.color
  );
  if (existe) {
    existe.cantidad += producto.cantidad;
  } else {
    carrito.push(producto);
  }
  saveCart();
}

// Renderiza el carrito en consola (de momento)
function renderCart() {
  console.log('Carrito actual:', carrito);
}