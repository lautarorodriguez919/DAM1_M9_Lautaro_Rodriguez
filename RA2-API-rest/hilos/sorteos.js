const nombre = process.argv[2];
const inicio = Date.now();
while (Date.now() - inicio < 5000) {}

const numero = Math.floor(Math.random() * 10) + 1;
const premio = numero === 7 ? '¡Has ganado 1000€!' : 'Has perdido'; 
process.stdout.write(JSON.stringify({ nombre, numero, premio }));