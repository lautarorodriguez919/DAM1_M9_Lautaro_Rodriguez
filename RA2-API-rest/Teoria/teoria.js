//COOKIES
//Una cookie es un fichero de texto pequeño que el navegador guarda en tu dispositivo. Máximo 4KB.
// Las 3 funciones que necesitas saber escribir de memoria:
// GUARDAR
function setCookie(nombre, valor, dias = 7) {
    const expires = new Date(Date.now() + dias * 864e5).toUTCString();
    document.cookie = `${nombre}=${encodeURIComponent(valor)}; expires=${expires}; path=/`;
}

// LEER
function getCookie(nombre) {
    return document.cookie
        .split('; ')
        .find(c => c.startsWith(nombre + '='))
        ?.split('=')[1]
        ?? null; // ← si no existe devuelve null
}

// BORRAR (expires en el pasado)
function deleteCookie(nombre) {
    document.cookie = `${nombre}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}


//LOCALSTORAGE
//Igual que cookies pero 5MB, no viaja al servidor, no caduca nunca.

// GUARDAR — siempre stringify para objetos
localStorage.setItem('alumno', JSON.stringify({ nombre: 'Aina' }));

// LEER — siempre parse
const alumno = JSON.parse(localStorage.getItem('alumno'));

// BORRAR una clave
localStorage.removeItem('alumno');

// BORRAR todo
localStorage.clear();

//CORS — Para conectar frontend con backend
//CORS es el "portero" del navegador. Decide si el frontend puede hablar con el backend.
//Mismo origen = mismo protocolo + dominio + puerto. Si algo cambia → origen diferente → CORS bloquea.

// En Express — instalar: npm install cors
import cors from "cors"

app.use(cors({ origin: 'http://localhost:5500' })) // solo permite tu frontend
// o
app.use(cors()) // permite todo (con cuidado)


