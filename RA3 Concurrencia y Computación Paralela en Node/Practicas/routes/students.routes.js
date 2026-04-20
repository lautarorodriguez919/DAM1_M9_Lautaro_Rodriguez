import { Router } from 'express';

const router = Router();

// GET /notas — obtener todas las notas
router.get('/', (req, res) => {
  res.json({ message: 'Lista de notas' });
});

// GET /notas/:id — obtener una nota por ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Nota con id ${id}` });
});

// POST /notas — crear una nota
router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({ message: 'Nota creada', data: body });
});

// PUT /notas/:id — actualizar una nota
router.put('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Nota ${id} actualizada` });
});

// DELETE /notas/:id — eliminar una nota
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Nota ${id} eliminada` });
});

export default router;