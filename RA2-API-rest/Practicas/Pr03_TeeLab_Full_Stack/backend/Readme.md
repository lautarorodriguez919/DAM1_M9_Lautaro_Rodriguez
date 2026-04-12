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

![tags](img/tags.png)

- GET /api/camisetas?q=palabra — busca en nombre o descripción

![nombre_descripcion](img/nombre_descripcion.png)

- GET /api/camisetas?sort=precio_asc — ordena por precio ascendente

![precio_asc](img/precio_asc.png)

- GET /api/camisetas?sort=precio_desc — ordena por precio descendente

![precio_desc](img/precio_desc.png)

- GET /api/camisetas?sort=nombre_asc — ordena por nombre ascendente

![nombre_asc](img/nombre_asc.png)

- GET /api/camisetas?sort=nombre_desc — ordena por nombre descendente

![nombre_desc](img/nombre_desc.png)

- GET /api/camisetas/:id — detalle de una camiseta

![id](img/id.png)


### Comandas
- POST /api/comandas — crear una comanda

![post_comandas](img/post_comandas.png)

- GET /api/comandas — listar todas las comandas

![comandas](img/comandas.png)

- GET /api/comandas/:id — detalle de una comanda

![id_comanda](img/id_comanda.png)