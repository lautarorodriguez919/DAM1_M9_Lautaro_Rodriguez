# TeeLab FullStack — Pr03

Micro-tienda de camisetas artísticas con frontend en HTML/CSS/JS
y backend en Node.js + Express.

## Vídeo de demostración

https://github.com/lautarorodriguez919/DAM1_M9_Lautaro_Rodriguez/tree/main/RA2-API-rest/Practicas/Pr03_TeeLab_Full_Stack/frontend/imgPr03_TeeLab_Full_Stack.mp4

> El vídeo muestra el catálogo, filtros, añadir al carrito, finalizar compra y ticket.

## Cómo arrancar el backend

```bash
cd backend
npm install
npm run dev
```

El servidor arranca en: http://localhost:3001

## Cómo arrancar el frontend

Abrir `frontend/html/index.html` con **Live Server** (VSCode).  
El frontend se sirve en: http://127.0.0.1:5500

## Endpoints utilizados

| Método | Endpoint                              | Descripción              |
|--------|---------------------------------------|--------------------------|
| GET    | /api/camisetas                        | Obtener catálogo completo |
| GET    | /api/camisetas?q=&talla=&color=&sort= | Filtrar camisetas        |
| POST   | /api/comandas                         | Enviar comanda y obtener ticket |

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