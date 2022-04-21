import express from 'express';
import {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo
} from '../controller/todos.controller.js';

const router = express.Router();


router.patch('/todos/:id', updateTodo);

// http://localhost:3000/api/v1/todos

export default router;