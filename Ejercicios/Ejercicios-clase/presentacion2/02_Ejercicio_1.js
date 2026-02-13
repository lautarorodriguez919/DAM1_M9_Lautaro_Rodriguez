/*let nombre = "Lautaro";
saludar(nombre);*/

 //Ejercicio 1
function saludar(nom,apellido="Rodriguez"){
    return console.log("Hola "+ nom +" "+ apellido);
}


/*let calculo = calcular(1,2);
console.log(calculo);*/

//Ejercicio 2
function calcular(num1, num2, operacion = "suma") {
    switch (operacion) {
        case "suma":
        case "+":
            return num1 + num2;
        case "resta":
        case "-":
            return num1 - num2;
        case "multiplicacion":
            return num1 * num2;
        default:
            return "Operación no válida";
    }
}


//Ejercicio 3
/*console.log(calcularPromedio(10, 8, 9)); 
console.log(calcularPromedio(10, "Hola", 5, true));*/
function calcularPromedio(...todasLasEntradas){
    let notasValidas = todasLasEntradas.filter(nota => typeof nota === 'number');
    if (notasValidas.length === 0) return 0;
    let sumaTotal = notasValidas.reduce((acumulador, nota) => acumulador + nota, 0);
    return sumaTotal / notasValidas.length;
}

/*console.log(concatenarNombres("Lautaro", 50, "Rodriguez", true, null, "Vera"));*/

//Ejercicio 4
function concatenarNombres(...argumentos){
    const soloNombres = argumentos.filter(arg => typeof arg === 'string');
    return soloNombres.join(", ");
}