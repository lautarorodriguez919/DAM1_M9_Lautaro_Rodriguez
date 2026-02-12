function pedirDatos(array,veces){
    for(let i = 0; i<veces ; i++){
        array[i] = prompt("dame un numero");
    }
    return array;
}

//ejercicio 1
function comparacionNombres()
{
    let numeros=[];
    let iterador = 2;
    pedirDatos(numeros, iterador);
    numeros[1] < numeros[0] ? console.log(numeros[0]+" es el numero mayor") : console.log(numeros[1]+" es el numero mayor")
}

//ejercicio 2
function multiplicacion(){
    let numeros=[];
    //let iterador = 2;
    //ejercicio 3
    let iterador = 3;
    pedirDatos(numeros, iterador);
    let multiplicador = prompt("cuantas veces quieres multiplicar? ");
    let resultado=[];
    for(let i=0;i<numeros.length;i++){
        resultado[i] = 0
        for(let j=0; j<multiplicador; j++){
            resultado[i]+=numeros[i]
        }
    }
    console.log("resultado de la multiplicacion = " + resultado[0]);
    console.log("resultado de la multiplicacion = " + resultado[1]);
    //ejercicio 3
    console.log("resultado de la multiplicacion = " + resultado[2]);
} 

//ejercicio 4
function notamedia(){
    let numeros=[];
    let iterador = 3;
    pedirDatos(numeros, iterador);
    let suma = 0;
    for(let i=0; i < numeros.length; i++){
        suma += numeros[i];
    }
    let nota_media = suma / numeros.length;
    return console.log("la nota media es: " + nota_media);
}

numerosNaturales();
//ejercicio 5
function numerosNaturales(){
    let numeros= 10000;
    let array_numeros=[];
    let array_copia = [];
    let array_resultado=[];
    let contador=0;
    
    //bucle para meter los 10mil numeros en una array
    for(let i=numeros; numeros>=0 ;i--){
        array_numeros[i]=numeros;
        array_copia[i]=numeros;
        numeros-=1;
    }
    for(let i=0; i < array_numeros.length; i++){
        let resultado_operacion = Operacion_Array(array_copia, i);
        if (resultado_operacion == array_numeros[i]){
            array_resultado[contador]=resultado_operacion;
            contador+=1;
        }
    }
    for(let i=0; i < array_resultado.length; i++){
        console.log(array_resultado[i]+ " numero detectado");
    }

}

function Operacion_Array(array1, iterador){
    let contador=0;
    let resultado=0;
    let potencia=0;
    let array_de_operaciones=[];

    while(array1[iterador]>0){
        array_de_operaciones[contador]=array1[iterador] % 10;
        array1[iterador]=array1[iterador] / 10;
        array1[iterador]=parseInt(array1[iterador]);
        contador += 1;
    }
    for (let j = array_de_operaciones.length-1; j >= 0; j--){
        potencia = Math.pow(array_de_operaciones[j], contador);
        resultado+=potencia;
    }
    return resultado;
}