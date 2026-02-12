//let obtenerNumero = parseInt(prompt("Indícame un número límite"));
//encontrarPrimos(obtenerNumero);

let numero = NumeroAleatorio(1,100);
Adivinar(numero);

//ejercicio 1
function encontrarPrimos(limite) {
    let arrayPrimos = [];
    for (let i = 2; i <= limite; i++) {
        
        let esPrimo = true;
        for (let j = 2; j < i; j++) {
            
            if (i % j === 0) {
                esPrimo = false;
                break;
            }
        }
        if (esPrimo) {
            arrayPrimos.push(i);
        }
    }
    console.log("Números primos encontrados:", arrayPrimos);
}

//ejercicio 2

function Adivinar(num){
    let entrada = 0;
    do{
        entrada = parseInt(prompt("Dame un numero: "));
        if (entrada == num){
            return console.log("Has acertado");
        }
        else{
            if(entrada<num){
                console.log("el numero es mayor");
            }
            else{
                console.log("el numero es menor");
            }
        }
    }while(entrada!=num);
}

function NumeroAleatorio(min,max){
    let numero_aleatorio = Math.floor(Math.random()*(max - min + 1));
    return numero_aleatorio;
}