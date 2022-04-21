import express from 'express'
import filmsRouter from './routes/films.routes.js';

const app = express();

app.use('/films',filmsRouter);


app.listen(4000);