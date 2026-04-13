import {worker} from 'worker_threads'
import express from 'express'

/*
app.get(/entreno/:nombre,(req,res)){}aimport { Worker } from 'worker_threads';

app.get('/sumar', (req, res) => {
 const worker = new Worker('./worker.js', {
   workerData: { numeros }            // ← pasa objetos directamente (no solo strings)
 });

 worker.on('message', (datos) => {
   res.json(datos);                   // → { resultado: 15 }
 });

 // Gestiona errores
 worker.on('error', (err) => {
   res.status(500).json({ error: err.message });
 });
});*/
