const API = 'http://localhost:3001';
let carrito = [];

function init() {
    loadCart();
    renderCart();
}

function loadCart() {
    carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];
}

function saveCart() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function renderCart() {
    const lista = document.getElementById('lista-carrito');
    lista.innerHTML = '';

    if (carrito.length === 0) {
        lista.innerHTML = '<p class="carrito-vacio">Tu carrito está vacío.</p>';
        actualizarTotal();
        return;
    }

    carrito.forEach((item, index) => lista.appendChild(crearLineaCarrito(item, index)));
    actualizarTotal();
    agregarListenersBotones();
}

function crearLineaCarrito(item, index) {
    const subtotal = (item.precio * item.cantidad).toFixed(2);
    const linea = document.createElement('article');
    linea.classList.add('linea-carrito');
    linea.innerHTML = `
        <div class="linea-info">
            <p class="linea-nombre">${item.nombre}</p>
            <p class="linea-detalle">Talla: ${item.talla} | Color: ${item.color}</p>
            <p class="linea-precio">${item.precio.toFixed(2)} € × ${item.cantidad} = ${subtotal} €</p>
        </div>
        <button class="btn-eliminar" data-index="${index}">Eliminar</button>
    `;
    return linea;
}

function actualizarTotal() {
    const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    document.getElementById('total-carrito').textContent = `${total.toFixed(2)} €`;
}

function agregarListenersBotones() {
    document.querySelectorAll('.btn-eliminar').forEach(btn => {
        btn.addEventListener('click', () => eliminarProducto(parseInt(btn.dataset.index)));
    });
}

function eliminarProducto(index) {
    carrito.splice(index, 1);
    saveCart();
    renderCart();
}

function vaciarCarrito() {
    carrito = [];
    saveCart();
    renderCart();
}

async function enviarComanda() {
    if (carrito.length === 0) {
        alert('El carrito está vacío.');
        return;
    }

    const comanda = construirComanda();

    try {
        const respuesta = await fetch(`${API}/api/comandas`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(comanda)
        });

        if (!respuesta.ok) throw new Error(`Error ${respuesta.status}`);

        const ticket = await respuesta.json();
        guardarTicket(ticket);
        vaciarCarrito();
        window.location.href = 'ticket.html';

    } catch (error) {
        console.error('Error al enviar la comanda:', error);
        alert('No se pudo conectar con la API. Inténtalo de nuevo.');
    }
}

function construirComanda() {
    return {
        cliente: {
            nombre: 'Alumno Prueba',
            email: 'alumno@itb.cat'
        },
        direccion: 'Carrer de la Pau, 1, Barcelona',
        items: carrito.map(item => ({
            camisetaId: item.camisetaId,
            talla:      item.talla,
            color:      item.color,
            cantidad:   item.cantidad
        }))
    };
}

function guardarTicket(ticket) {
    // Guardamos el orderId Y el ticket completo en localStorage
    // Así ticket.js puede mostrar todos los datos sin llamar a la API
    localStorage.setItem('orderId', ticket.id ?? ticket.orderId);
    localStorage.setItem('ultimoTicket', JSON.stringify(ticket));
}

document.getElementById('btn-vaciar').addEventListener('click', vaciarCarrito);
document.getElementById('btn-finalizar').addEventListener('click', enviarComanda);

init();