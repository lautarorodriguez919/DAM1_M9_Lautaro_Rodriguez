//Ejercicio 1
function eliminarDuplicados(array) {
    return [...new Set(array)];
}

const numeros = [1, 2, 3, 4, 4, 5, 6, 6, 7];
const numerosUnicos = eliminarDuplicados(numeros);

console.log("Original:", numeros);
console.log("Sin duplicados:", numerosUnicos);


//Ejercicio 2
function tienenElementosEnComun(arr1, arr2) {
    const set1 = new Set(arr1);
    return arr2.some(item => set1.has(item));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const array3 = [8, 9, 10];

console.log(tienenElementosEnComun(array1, array2));
console.log(tienenElementosEnComun(array1, array3));