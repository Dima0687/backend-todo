import express from 'express';
import todosRouter from './routes/todos.routes.js'

const app = express();

app.use(express.json());

app.use('/api/v1', todosRouter);

// http://localhost:4000/api/v1


app.listen(4000);