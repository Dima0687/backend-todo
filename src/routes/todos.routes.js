import express from 'express';
import {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo
} from '../controller/todos.controller.js';

const router = express.Router();


router.get('/todos', getAllTodos);
router.post('/todos', createTodo);
router.delete('/todos/:id', deleteTodo);
router.put('/todos/:id', updateTodo);

// http://localhost:4000/api/v1/todos

export default router;