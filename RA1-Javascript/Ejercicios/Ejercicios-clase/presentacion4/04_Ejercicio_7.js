// 1. DATOS INICIALES (Copiados del ejercicio)
let modulos = ["m02", "m03", "m04", "m05", "m06", "m07", "m08", "FOL"];
let alumnoNotas = [[8, 9, 4], [9, 10], [6, 8, 10], [4], [8, 4, 7], [], [7, 5, 9, 10], [10]];
let mapaNotas = new Map();

for (let i = 0; i < modulos.length; i++) {
    mapaNotas.set(modulos[i], alumnoNotas[i]);
}

console.log("--- MAPA INICIAL ---");
console.log(mapaNotas);


mapaNotas.set("m07", [7.5, 6]);
console.log("\n--- MAPA ACTUALIZADO (m07) ---");
console.log("Notas de m07:", mapaNotas.get("m07"));


let setDeClaves = new Set(mapaNotas.keys());
console.log("\n--- SET DE CLAVES ---");
console.log(setDeClaves);


let objetoAlumno = Object.fromEntries(mapaNotas);
console.log("\n--- OBJETO FINAL ---");
console.log(objetoAlumno);