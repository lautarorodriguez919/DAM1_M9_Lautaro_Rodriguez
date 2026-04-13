import {workerData, parentPort} from 'worker_threads'

const {nombre, peso, altura} = workerData;

const inicio = Date.now()

while (Date.now() - inicio < 6000 ){

}

const imc = peso / (altura * altura);


let plan;
if (imc < 18.5) {
  plan = 'Volumen';
} else if (imc < 25) {
  plan = 'Definición';
} else {
  plan = 'Mantenimiento';
}

let calorias;
if (plan === 'Volumen') {
  calorias = Math.round(peso * 40);
} else if (plan === 'Definición') {
  calorias = Math.round(peso * 30);
} else {
  calorias = Math.round(peso * 25);
}


parentPort.postMessage({
    nombre,
    imc: Math.round(imc * 100) / 100,
    plan,
    calorias
});