import express from 'express';
import LivroController from '../controllers/livrosController.js';

const router = express.Router();
/* Na hora de criar rotas, 
sempre ir da mais especifica para 
menos especifica */
router
  .get('/livros', LivroController.listarLivros)
  .get('/livros/busca', LivroController.listarLivroPorEditora)
  .get('/livros/:id', LivroController.listarLivrosPorId)
  .post('/livros', LivroController.cadastarLivro)
  .put('/livros/:id', LivroController.atualizarLivro)
  .delete('/livros/:id', LivroController.excluirLivro);

export default router;
