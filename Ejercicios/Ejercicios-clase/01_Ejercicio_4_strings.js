let obtenerString = prompt("Indicame una palabra");
intercambioPosicion1y2(obtenerString);
//let obtenerNumero = prompt("Indicame un numero");
//stringYnumero(obtenerString,obtenerNumero);

//let obtenerString = prompt("Indicame una palabra que contenga AS");
//ComprobacionAs(obtenerString);

//Ejercicio 1
function ComprobacionAs(palabra){
    const primeraLetra =  palabra.charAt(0);
    const segundaLetra = palabra.charAt(1);
    if(primeraLetra.toUpperCase() != "A" && segundaLetra.toUpperCase() != "S"){
        let resultado = "AS" + palabra;
        return console.log(resultado);
    }
    else{
        return console.log(palabra);
    }
}

//Ejercicio 2

function stringYnumero(string,numero){
    let largo = string.length;
    let stringResultado="";
    if (numero > largo){
        return console.log("El numero es mayor al string");
    }
    else{
        let array = string.split("");
        array[numero] = "";
        for(let i =0; i<array.length;i++){
            stringResultado +=array[i];
        }
        return console.log(stringResultado);
    }
}

//Ejercicio 3
function intercambioPosicion1y2(string){
    let longitud = string.length;
    let array=[];
    let stringResultado="";

    if (longitud <= 0){
        return console.log("El string tiene menos de 0 letras");
    }
    else{
        array = string.split("");
        copia=array[0];
        array[0]= array[longitud-1];
        array[longitud-1]= copia;
        for(let i = 0; i<array.length;i++){
            stringResultado+=array[i];
        }
        return console.log(stringResultado);
    }
}