const API = 'http://localhost:3001';
let carrito = [];

async function init() {
    loadCart();
    actualizarContadorCarrito();
    await cargarCamisetas();
    agregarListenersFiltros();
}

async function cargarCamisetas() {
    const url = construirURL();
    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) throw new Error(`Error ${respuesta.status}`);
        const camisetas = await respuesta.json();
        renderCamisetas(camisetas);
    } catch (error) {
        console.error('Error al cargar camisetas:', error);
        mostrarError();
    }
}

function construirURL() {
    const q     = document.getElementById('filtro-q').value;
    const talla = document.getElementById('filtro-talla').value;
    const color = document.getElementById('filtro-color').value;
    const sort  = document.getElementById('filtro-sort').value;

    const url = new URL(`${API}/api/camisetas`);
    if (q)     url.searchParams.append('q', q);
    if (talla) url.searchParams.append('talla', talla);
    if (color) url.searchParams.append('color', color);
    if (sort)  url.searchParams.append('sort', sort);
    return url;
}

function renderCamisetas(camisetas) {
    const contenedor = document.getElementById('catalogo');
    contenedor.innerHTML = '';

    if (camisetas.length === 0) {
        contenedor.innerHTML = '<p class="no-results">No se encontraron camisetas.</p>';
        return;
    }
    camisetas.forEach(c => contenedor.appendChild(crearCardCamiseta(c)));
}

function crearCardCamiseta(c) {
    const card = document.createElement('article');
    card.classList.add('card-producto');
    
    // Color por defecto = primero de la lista
    const colorDefecto = c.colores[0];
    const imagenDefecto = c.imagenes[colorDefecto] ?? '';

    card.innerHTML = `
        <img class="img-camiseta" src="../${imagenDefecto}" alt="${c.nombre}">
        <h2>${c.nombre}</h2>
        <p class="descripcion">${c.descripcion ?? ''}</p>
        <p class="precio">${c.precioBase.toFixed(2)} €</p>

        <label>Talla:
            <select class="sel-talla">
                ${(c.tallas ?? []).map(t =>
                    `<option value="${t}">${t}</option>`
                ).join('')}
            </select>
        </label>

        <label>Color:
            <select class="sel-color">
                ${(c.colores ?? []).map(col =>
                    `<option value="${col}">${col}</option>`
                ).join('')}
            </select>
        </label>

        <label>Cantidad:
            <input class="inp-cantidad" type="number" value="1" min="1" max="10">
        </label>

        <button class="btn-añadir" data-id="${c.id}">Añadir al carrito</button>
    `;

    card.querySelector('.sel-color').addEventListener('change', (e) => {
        const nuevaImagen = c.imagenes[e.target.value] ?? imagenDefecto;
        card.querySelector('.img-camiseta').src = `../${nuevaImagen}`;
    });

    card.querySelector('.btn-añadir').addEventListener('click', () => addToCart(c));
    return card;
}

function mostrarError() {
    const contenedor = document.getElementById('catalogo');
    contenedor.innerHTML = '<p class="error">No se pudo conectar con la API.</p>';
}

function agregarListenersFiltros() {
    const ids = ['filtro-talla', 'filtro-color', 'filtro-sort'];
    ids.forEach(id => {
        document.getElementById(id)
            .addEventListener('change', cargarCamisetas);
    });
    
    document.getElementById('filtro-q')
        .addEventListener('input', cargarCamisetas);
}

function loadCart() {
    carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];
}

function saveCart() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function addToCart(camiseta) {
    const card     = document.querySelector(`[data-id="${camiseta.id}"]`).closest('article');
    const talla    = card.querySelector('.sel-talla').value;
    const color    = card.querySelector('.sel-color').value;
    const cantidad = parseInt(card.querySelector('.inp-cantidad').value);

    const existente = carrito.find(
        item => item.camisetaId === camiseta.id &&
                item.talla     === talla        &&
                item.color     === color
    );

    if (existente) {
        existente.cantidad += cantidad;
    } else {
        carrito.push({
            camisetaId: camiseta.id,
            nombre:     camiseta.nombre,
            talla,
            color,
            cantidad,
            precio:     camiseta.precioBase
        });
    }

    saveCart();
    actualizarContadorCarrito();
    mostrarFeedback();
}

function actualizarContadorCarrito() {
    const total = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    const badge = document.getElementById('contador-carrito');
    if (badge) badge.textContent = total;
}

function mostrarFeedback() {
    const badge = document.getElementById('contador-carrito');
    badge.classList.add('bump');
    setTimeout(() => badge.classList.remove('bump'), 300);
}

init();