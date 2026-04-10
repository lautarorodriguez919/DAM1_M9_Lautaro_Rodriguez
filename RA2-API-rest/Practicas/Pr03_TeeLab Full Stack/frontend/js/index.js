const API = 'http://localhost:3001';
let carrito = [];

async function init() {
    loadCart();
    actualizarContadorCarrito();
    await cargarCamisetas();
    agregarListenersFiltros();
}

async function cargarCamisetas() {
    const q = document.getElementById('filtro-q').value;
    const talla = document.getElementById('filtro-talla').value;
    const color = document.getElementById('filtro-color').value;
    const sort = document.getElementById('filtro-sort').value;

    const url = new URL(`${API}/api/camisetas`);
    if (q) url.searchParams.append('q', q);
    if (talla) url.searchParams.append('talla', talla);
    if (color) url.searchParams.append('color', color);
    if (sort) url.searchParams.append('sort', sort);

    try {
        const respuesta = await fetch(url);
        const camisetas = await respuesta.json();
        renderCamisetas(camisetas);
    } catch (error) {
        console.error('Error al cargar camisetas:', error);
    }
}

function renderCamisetas(camisetas) {
    
}

function agregarListenersFiltros() {
    
}

function loadCart() {
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];
}

function saveCart() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function addToCart(producto) {
    
}

function actualizarContadorCarrito() {
    
}

init();