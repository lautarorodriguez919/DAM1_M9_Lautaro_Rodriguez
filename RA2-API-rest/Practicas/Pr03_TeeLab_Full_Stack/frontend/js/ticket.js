// ─── PUNTO DE ENTRADA ──────────────────────────────────────────────
function init() {
    const ticket = leerTicket();
    if (!ticket) {
        mostrarError();
        return;
    }
    renderTicket(ticket);
}

function leerTicket() {
    const raw = localStorage.getItem('ultimoTicket');
    if (!raw) return null;
    return JSON.parse(raw);
}

function renderTicket(ticket) {
    renderDatos(ticket);
    renderLineas(ticket.items ?? ticket.lineas ?? []);
    renderTotal(ticket);
}

function renderDatos(ticket) {
    document.getElementById('ticket-id').textContent    = ticket.id ?? ticket.orderId ?? '—';
    document.getElementById('ticket-fecha').textContent = formatearFecha(ticket.fecha ?? ticket.createdAt);
    document.getElementById('ticket-estado').textContent = ticket.estado ?? ticket.status ?? '—';
}

function formatearFecha(fechaRaw) {
    if (!fechaRaw) return '—';
    return new Date(fechaRaw).toLocaleDateString('es-ES', {
        day:   '2-digit',
        month: '2-digit',
        year:  'numeric',
        hour:  '2-digit',
        minute:'2-digit'
    });
}

function renderLineas(items) {
    const contenedor = document.getElementById('ticket-lineas');
    contenedor.innerHTML = '';

    if (items.length === 0) {
        contenedor.innerHTML = '<p>No hay líneas en este pedido.</p>';
        return;
    }

    items.forEach(item => contenedor.appendChild(crearLineaTicket(item)));
}

function crearLineaTicket(item) {
    const subtotal = ((item.precio ?? item.precioUnitario) * item.cantidad).toFixed(2);
    const linea = document.createElement('article');
    linea.classList.add('linea-ticket');
    linea.innerHTML = `
        <p class="linea-nombre">${item.nombre ?? item.camisetaId}</p>
        <p class="linea-detalle">Talla: ${item.talla} | Color: ${item.color}</p>
        <p class="linea-precio">
            ${(item.precio ?? item.precioUnitario).toFixed(2)} € × ${item.cantidad} = ${subtotal} €
        </p>
    `;
    return linea;
}

function renderTotal(ticket) {
    const total = ticket.total ?? ticket.totalPrecio ?? calcularTotal(ticket.items ?? ticket.lineas ?? []);
    document.getElementById('ticket-total-precio').textContent = `${parseFloat(total).toFixed(2)} €`;
}

function calcularTotal(items) {
    return items.reduce((acc, item) => acc + (item.precio ?? item.precioUnitario) * item.cantidad, 0);
}

function mostrarError() {
    document.getElementById('ticket-datos').innerHTML =
        '<p class="error">No se encontró ningún pedido. <a href="index.html">Volver al catálogo</a></p>';
}

init();