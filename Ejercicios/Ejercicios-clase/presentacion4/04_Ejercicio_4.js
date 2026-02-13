const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    encendido: false,
    kilometraje: 0,

    // 1. Método ARRANCAR
    arrancar: function() {
        this.encendido = true;
        console.log(`El ${this.marca} ${this.modelo} se ha ARRANCADO.`);
    },

    // 2. Método APAGAR
    apagar: function() {
        this.encendido = false;
        console.log(`El coche se ha APAGADO.`);
    },

    // 3. Método RECORRER
    recorrer: function(km) {
        if (this.encendido === true) {
            this.kilometraje += km; 
            console.log(`Has recorrido ${km} km. Kilometraje total: ${this.kilometraje} km.`);
        } else {
            console.log("¡No puedes recorrer distancia con el coche apagado! Arráncalo primero.");
        }
    }
};


console.log("--- ESTADO INICIAL ---");
console.log(coche);

console.log("\n--- PRUEBA 1: Intentar moverlo apagado ---");
coche.recorrer(100);

console.log("\n--- PRUEBA 2: Arrancar y mover ---");
coche.arrancar();
coche.recorrer(50);
coche.recorrer(150);

console.log("\n--- PRUEBA 3: Apagar ---");
coche.apagar();

console.log("\n--- ESTADO FINAL DEL OBJETO ---");
console.log(coche);