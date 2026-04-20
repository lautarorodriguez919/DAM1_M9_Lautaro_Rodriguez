import express from 'express';

const app = express();
const PORT = 3002;

const server = app.listen(PORT, () => {
    console.log(`Worker ${process.pid} escuchando en http://localhost:${PORT}/`);
});

/***************************************
 ************ CHILD PROCESS ************
 ***************************************/
/*import { execFile } from 'child_process';

app.get('/sumar', (req, res) => {
    const numeros = [1, 2, 3, 4, 5];

    console.log("Node hace GET")

    // Lanza el script en un proceso separado
    execFile('node', ['tarea-pesada.js', JSON.stringify(numeros)],
        (error, stdout, stderr) => {
            if (error) {
                return res.status(500).json({ error: 'Falló el proceso' });
            }
            const datos = JSON.parse(stdout);
            res.json(datos); // → { resultado: 15 }
        }
    );
    // Mientras tanto, Node sigue atendiendo otras peticiones
});

*/


/***************************************
 ************ WORKER THREAD ************
 ***************************************/

/*import { Worker } from 'worker_threads';

app.get('/sumar', (req, res) => {
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Crea el worker y le pasa los datos
    const worker = new Worker('./worker.js', {
        workerData: { numeros }            // pasa objetos directamente (no solo strings)
    });

    // Escucha el resultado
    worker.on('message', (datos) => {
        res.json(datos);
        console.log("Resultado:", datos.resultado);
    });

    // Gestiona errores
    worker.on('error', (err) => {
        res.status(500).json({ error: err.message });
    });
});


app.get('/ping', (req, res) => {
    res.json({ mensaje: 'Node sigue vivo', pid: process.pid });
    console.log("Node sigue vivo:", process.pid);
});*/





/***************************************
 ************ MULTIPROCESS FORK() ************
 ***************************************/

import { fork, exec, spawn } from 'child_process';

app.get('/ping', (req, res) => {
    res.json({ mensaje: '¡El restaurante está abierto y atendiendo rápido!' });
    console.log('Ping recibido. Servidor responde rápido.');
});

//Tarea pesada (delegada con fork)
app.get('/inventario', (req, res) => {
    console.log('Cliente pide el inventario. Delegando tarea...');

    // 1. Contratamos al segundo cocinero (creamos el proceso)
    const cocineroHijo = fork('tarea-fork.js');

    // 2. Le damos la orden por el walkie-talkie --> podemos enviar objetos, no solo strings
    //Establecemos canal de comunicación con el hijo y le damos la orden de empezar el inventario
    cocineroHijo.send({ comando: 'empezar_inventario' });

    // 3. Escuchamos lo que nos responde
    cocineroHijo.on('message', (mensaje) => {
        console.log(`El cocinero hijo dice: ${mensaje.estado}`);

        // 4. Respondemos al cliente HTTP solo cuando el hijo termina
        res.json({
            exito: true,
            resultado: mensaje.estado,
            total_items: mensaje.total
        });
    });

    // Gestionamos si el hijo falla
    cocineroHijo.on('error', (error) => {
        console.error('El cocinero hijo tuvo un accidente:', error);
        res.status(500).json({ error: 'Fallo al hacer el inventario' });
    });
});


app.get('/exec', (req, res) => {

    // Ejecutamos un comando del sistema (ej: listar archivos)
    // Windows: 'dir' | Linux/Mac: 'ls -la'
    exec('ls -la', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error al ejecutar: ${error.message}`);
            res.status(500).json({ error: 'Fallo al hacer ls -la' });
            return;
        }
        if (stderr) {
            console.error(`Avisos del sistema: ${stderr}`);
            res.status(500).json({ error: 'Avisos del sistema' });
            return;
        }
        // stdout tiene TODO el texto junto, entregado de una vez
        console.log(`Resultado del comando:\n${stdout}`);
        res.json(`${stdout}`);
    });
});

//como puedo decirle en lugar de 5 veces crar un contaor    ue cuando llege a 10 haga un kill
app.get('/spawn', (req, res) => {
    // Le decimos al sistema: "Haz solo 5 pings y cierra la manguera"
    const procesoPing = spawn('ping', ['-c', '5', 'google.com']);
    let contador = 0;

    // Preparamos la cabecera para que el navegador sepa que va a recibir datos poco a poco
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    // Escuchamos el hilo de datos de salida
    procesoPing.stdout.on('data', (pedacito) => {
        // Nos va llegando la información línea a línea o por bloques
        contador ++;
        console.log(`Recibido: ${pedacito.toString()}`);
        res.write(`Dato recibido: ${pedacito.toString()}`); // Escribe en la respuesta sin cerrarla
        if (contador >=10){
            procesoPing.kill();
        }
    });
    // Escuchamos si el proceso termina
    procesoPing.on('close', (codigo) => {
        console.log(`El proceso terminó con código ${codigo}`);
        res.end('Proceso ping terminado.'); // Cerramos la respuesta al cliente
    });
    procesoPing.stderr.on('data', (data) => {
        console.error(`Error en el hijo: ${data}`);
        res.status(500).json({ error: 'Fallo al hacer ping' });
    });

});

