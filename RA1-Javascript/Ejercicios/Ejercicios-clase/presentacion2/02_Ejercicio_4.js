const notas = [3.4, 7.9, 8.0, 2.5, 5.6, 5.4, 9.0];

const sumaTotal = notas.reduce((acumulador, nota) => acumulador + nota, 0);
const media = sumaTotal / notas.length;
const primeraAprobada = notas.find(nota => nota > 5);
const notasSobre20 = notas.map(nota => nota * 2);

console.log("Nota media:", media.toFixed(2));
console.log("Primera nota > 5:", primeraAprobada);
console.log("Notas sobre 20:", notasSobre20);