//Ejercicio Vocales consonantes
let cadenaEntrada = prompt("Dame una palabra");
separarVocalesDeConsonantes(cadenaEntrada);

function separarVocalesDeConsonantes(string){
    let arrayVocales = ["A","E","I","O","U"];
    let arrayConsonantes = ["B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "Ñ", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];
    let arrayResultadoVocales=[];
    let arrayResultadoConsonantes=[];
    let arrayString=string.split("");
    let stringResultado="";

    for(let i=0; i < arrayString.length;i++){
        for(let j = 0; j < arrayVocales.length; j++){
            if(arrayString[i].toUpperCase()==arrayVocales[j]){
                arrayResultadoVocales[i]=arrayVocales[j];
            }
            else{
                for(let k = 0; k < arrayConsonantes.length; k++){
                    if(arrayString[i].toUpperCase()==arrayConsonantes[k]){
                        arrayResultadoConsonantes[i]=arrayConsonantes[k];
                    }
                }
            }
        }
    }
    let arrayResultado=[arrayResultadoVocales,arrayResultadoConsonantes];
    for(let i=0; i < arrayResultado.length;i++){
        stringResultado+=arrayResultado[i];
    }
    return console.log(stringResultado);
}
