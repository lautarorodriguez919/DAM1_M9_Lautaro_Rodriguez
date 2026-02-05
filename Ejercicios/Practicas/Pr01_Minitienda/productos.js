const productosJSON = `[
  {
    "id": "TSH01",
    "nombre": "MACACARENA",
    "descripcion": "Quan balles sense vergonya i el ritme et domina.",
    "precioBase": 19.95,
    "tallas": ["S", "M", "L", "XL"],
    "colores": ["blanco", "negro", "mostaza"],
    "imagenes": {
      "blanco": "img/MACACARENA.png",
      "negro": "img/MACACARENA_BLACK.png",
      "mostaza": "img/MACACARENA.png"
    },
    "tags": ["nuevo"]
  },
  {
    "id": "TSH02",
    "nombre": "NINETIES MODE",
    "descripcion": "Un homenatge pixelat als anys 90.",
    "precioBase": 21.50,
    "tallas": ["S", "M", "L", "XL", "XXL"],
    "colores": ["gris", "negro"],
    "imagenes": {
      "gris": "img/NINETIES.png",
      "negro": "img/NINETIES_BLACK.png"
    },
    "tags": ["retro"]
  },
  {
    "id": "TSH03",
    "nombre": "RESERVOIR INVADERS",
    "descripcion": "Quan Tarantino coneix els videojocs clàssics.",
    "precioBase": 22.90,
    "tallas": ["M", "L", "XL"],
    "colores": ["azul", "negro"],
    "imagenes": {
      "azul": "img/RESERVOIR.png",
      "negro": "img/RESERVOIR_BLACK.png"
    },
    "tags": ["edicion-especial"]
  },
  {
    "id": "TSH04",
    "nombre": "VITRUVIAN CODE",
    "descripcion": "Art, codi i proporció perfecta.",
    "precioBase": 24.00,
    "tallas": ["S", "M", "L", "XL"],
    "colores": ["blanco", "negro"],
    "imagenes": {
      "blanco": "img/VITRUVIAN.png",
      "negro": "img/VITRUVIAN_BLACK.png"
    },
    "tags": ["premium"]
  }
]
`;

const productosData = JSON.parse(productosJSON);

function init(){
  muestraProductos(productosData);
}

function muestraProductos(datos){
  const contenedor = document.querySelector("#contenedor-productos")

  datos.forEach(carta => {
    let articulo = crearArticulo(carta);
    contenedor.appendChild(articulo);
  })
}

function crearArticulo(producto){
  const article = document.createElement("article");
  article.className = "card";

  const color = producto.colores[0];
  const imagen = producto.imagenes[color];
  article.innerHTML = `
    <div class="image-wrapper"> <img src="${imagen}" alt ="${producto.nombre}" id="img-${producto.id}"></div>
    <div class="badge">${producto.tags[0].toUpperCase()}</div>
    <h2>${producto.nombre.toUpperCase()}</h2>
    <p class="description">${producto.descripcion}</p>
    <p class="price">${producto.precioBase.toFixed(2)}€</p>
  `;
  article.appendChild(selectorTallas(producto.tallas));
  article.appendChild(selectorColores(producto));
  article.appendChild(agregarCarrito(producto.nombre));
  return article;
}

function selectorTallas(tallas){
  const div = document.createElement("div");
  div.className = "selector-group";
  div.innerHTML = "<label>Talla:</label>";
  
  const row = document.createElement("div");
  row.className = "option-row";
  tallas.forEach(talla => {
    const btn = document.createElement("button");
    btn.className = "size-btn"
    btn.textContent = talla.toUpperCase();
    row.appendChild(btn)
  });

  div.appendChild(row);
  return div;
}

function selectorColores(producto){
  const div = document.createElement("div");
  div.className = "selector-group";
  div.innerHTML = "<label>Color:</label>";

  const row = document.createElement("div");
  row.className = "option-row";
  producto.colores.forEach(color => {
    const btn = document.createElement("button");
    btn.className = "color-circle"
    btn.style.backgroundColor=traducirColor(color)
    btn.title = color;

    btn.addEventListener("click", () => {
      const imgElement = document.getElementById(`img-${producto.id}`);
      imgElement.src = producto.imagenes[color];
    });
    row.appendChild(btn);
  });
  div.appendChild(row);
  return div
}

function agregarCarrito(nombre){
  const btn = document.createElement("button");
  btn.className = "add-to-cart";
  btn.textContent = "Añadir al carrito";
   btn.addEventListener("click",() => {
    alert(`has añadido ${nombre} al carrito`)
   });
   return btn;

}

function traducirColor(color){
  const colores = {
    "mostaza": "yellow",
    "blanco": "white",
    "negro": "black",
    "gris": "grey",
    "azul": "blue"
  };

  return colores[color] || color;
}