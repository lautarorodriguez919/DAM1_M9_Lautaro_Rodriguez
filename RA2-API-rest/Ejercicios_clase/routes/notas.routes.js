import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Lista de notas' });
});

router.get('/:id', (req, res) => {
  res.json({ message: `Nota con id ${req.params.id}` });
});

router.post('/', (req, res) => {
  res.status(201).json({ message: 'Nota creada', data: req.body });
});

router.put('/:id', (req, res) => {
  res.json({ message: `Nota ${req.params.id} actualizada` });
});

router.delete('/:id', (req, res) => {
  res.json({ message: `Nota ${req.params.id} eliminada` });
});

export default router;
