import express from 'express';
import {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo
} from '../controller/todos.controller.js';

const router = express.Router();


/* router.post('/todos', createTodo);
router.get('/todos', getAllTodos);

router.delete('/todos/:id', deleteTodo);
router.patch('/todos/:id', updateTodo);
 */

router.route('/todos').post(createTodo).get(getAllTodos);
router.route('/todos/:id').patch(updateTodo).delete(deleteTodo);

// http://localhost:4000/api/v1/todos

export default router;