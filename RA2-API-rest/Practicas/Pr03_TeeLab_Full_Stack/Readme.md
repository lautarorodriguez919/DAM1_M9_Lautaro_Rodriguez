## Cómo arrancar el backend

```bash
cd backend
npm install
npm run dev
```

El servidor arranca en: http://localhost:3001

## Cómo arrancar el frontend

Abre `frontend/html/index.html` con **Live Server** (VSCode).  
El frontend se sirve en: http://127.0.0.1:5500

## Endpoints utilizados

| Método | Endpoint           | Descripción                        |
|--------|--------------------|------------------------------------|
| GET    | /api/camisetas     | Obtener catálogo completo          |
| GET    | /api/camisetas?q=&talla=&color=&sort= | Filtrar camisetas |
| POST   | /api/comandas      | Enviar comanda y obtener ticket    |

## Persistencia en cliente

Se usa **localStorage** para:
- `carrito` — líneas del carrito activo
- `ultimoTicket` — ticket completo del último pedido
- `orderId` — ID del último pedido

## Tecnologías

- Backend: Node.js, Express, CORS
- Frontend: HTML5, CSS3, JavaScript ES6+
- Comunicación: fetch + async/await
- Persistencia cliente: localStorage