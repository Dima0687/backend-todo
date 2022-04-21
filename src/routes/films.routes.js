import express from 'express';
import logger from '../controller/films.controller.js';

const router = express.Router();


router.get('/', logger);

export default router;