import express, { application } from 'express';
import {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo
} from '../controller/todos.controller.js';

const router = express.Router();


router.patch('/todos/:id', updateTodo);

router.post("/todos", createTodo);

router.patch('/todos/:id', updateTodo);

router.delete('/todos/:id', deleteTodo);

// http://localhost:3000/api/v1/todos

export default router;