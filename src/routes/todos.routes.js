import express from 'express';
import {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo
} from '../controller/todos.controller.js';

const router = express.Router();


router.get('/todos', getAllTodos);

// http://localhost:3000/api/v1/todos

export default router;