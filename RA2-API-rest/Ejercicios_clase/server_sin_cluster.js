import express from 'express';
import studentsRouter from './routes/students.routes.js';
import notasRouter from './routes/notas.routes.js';

const app = express();
const PORT = 3011;

app.use(express.json());

app.use((req, res, next) => {
  console.log(`[PID ${process.pid}]`, req.method, req.url);
  next();
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', pid: process.pid });
});

app.use('/students', studentsRouter);
app.use('/notas', notasRouter);

app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ message: 'Error interno' });
});

app.listen(PORT, () => {
  console.log(`Servidor SIN cluster arrancado en http://localhost:${PORT}/`);
});