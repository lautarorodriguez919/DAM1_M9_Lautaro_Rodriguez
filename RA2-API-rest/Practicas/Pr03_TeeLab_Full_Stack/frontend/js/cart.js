let carrito = [];

function loadCart() {
  carrito = JSON.parse(localStorage.getItem('carrito')) || [];
}

function saveCart() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

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

function renderCart() {
  console.log('Carrito actual:', carrito);
}