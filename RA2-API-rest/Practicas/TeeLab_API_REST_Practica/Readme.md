# Como arrancar
npm install
npm run dev

El servidor arranca en http://localhost:3001/

![arrancar-server](img/arrancar-servidor.png)

## Endpoints
### Camisetas

- GET /api/camisetas — lista todas las camisetas

![camisetas](img/camisetas.png)

- GET /api/camisetas?talla=M — filtra por talla

![tallas](img/tallas.png)

- GET /api/camisetas?color=negro — filtra por color

![colores](img/colores.png)

- GET /api/camisetas?tag=nuevo — filtra por tag



- GET /api/camisetas?q=palabra — busca en nombre o descripción



- GET /api/camisetas?sort=precio_asc — ordena por precio ascendente


- GET /api/camisetas?sort=precio_desc — ordena por precio descendente

![colores](img/colores.png)

- GET /api/camisetas?sort=nombre_asc — ordena por nombre ascendente

![colores](img/colores.png)

- GET /api/camisetas?sort=nombre_desc — ordena por nombre descendente

![colores](img/colores.png)

- GET /api/camisetas/:id — detalle de una camiseta

![colores](img/colores.png)


### Comandas
- POST /api/comandas — crear una comanda
- GET /api/comandas — listar todas las comandas
- GET /api/comandas/:id — detalle de una comanda