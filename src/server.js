import express from 'express';
import todosRouter from './routes/todos.routes.js';

const app = express();

app.use(express.json());
// den error handler hinzufügen

app.use('/api/v1', todosRouter);

// http://localhost:4000/api/v1

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Der Server läuft auf Port: ${PORT}`));