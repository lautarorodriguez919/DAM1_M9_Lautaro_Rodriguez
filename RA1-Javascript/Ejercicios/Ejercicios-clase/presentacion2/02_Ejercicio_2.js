//Ejercicio 1
/*let numeros = [];
let cantidad = Math.floor(Math.random() * 10) + 1;
for (let i = 0; i < cantidad; i++) {
    let aleatorio = Math.floor(Math.random() * 100) + 1;
    numeros.push(aleatorio);
}
console.log("Lista original:", numeros);
NumerosPares(numeros)*/

function NumerosPares(listaDeNumeros) {
    let sumaTotal = 0;
    for (let numero of listaDeNumeros) {
        if (numero % 2 === 0) {
            sumaTotal += numero; 
        }
    }
    return console.log("La suma de los pares es:", sumaTotal);
}

//Ejercicio 2
/*let datosAlumno = ["Rodriguez", "8", 9, '5', 4, 'Lautaro'];
console.log("Original:", datosAlumno);
console.log("Ordenado:", ordenDatos(datosAlumno));*/

function ordenDatos(array) {
    let nombre = array.pop(); 
    let apellido = array.shift(); 
    let suma = 0;
    
    for(let i = 0; i < array.length; i++) {
        suma = suma + Number(array[i]); 
    }
    let media = suma / array.length;
    array.unshift(apellido);
    array.unshift(nombre); 
    array.push(media);

    return array;
}

//Ejercicio 3
console.log(filterWords(["Bob", "Alex", "Zoello"])); 
function filterWords(arrayPalabras) {
    return arrayPalabras.filter(palabra => !palabra.startsWith("Z"));
}