let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
let primerDiaM = dias.find(dia => dia.startsWith("M"));
let posicionV = dias.findIndex(dia => dia.startsWith("V"));
let algunDiaS = dias.some(dia => dia.startsWith("S"));
let todosAcabanS = dias.every(dia => dia.endsWith("s"));


console.log("1. Primer día con M:", primerDiaM);
console.log("2. Posición día con V:", posicionV);
console.log("3. ¿Algún día con S?:", algunDiaS);
console.log("4. ¿Todos acaban en s?:", todosAcabanS);