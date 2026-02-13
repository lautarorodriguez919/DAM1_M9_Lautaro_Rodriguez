const tvSamsung = {
    nombre: "TV Samsung 42”",
    categoria: "Televisores",
    unidades: 4,
    precio: 345.95,
    
    getImporte: function() {
        return this.unidades * this.precio;
    }
};

console.log(`nombre: ${tvSamsung.nombre}`);
console.log(`categoria: ${tvSamsung.categoria}`);
console.log(`unidades: ${tvSamsung.unidades}`);
console.log(`precio: ${tvSamsung.precio}`);
console.log(`IMPORTE TOTAL: ${tvSamsung.getImporte()}`);

let jsonDeLaTele = JSON.stringify(tvSamsung);
console.log(jsonDeLaTele);