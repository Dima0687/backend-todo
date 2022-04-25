import express from 'express';
import fs from 'fs';

import todosRouter from './routes/todos.routes.js';


const router = express.Router();

router.use(express.static("public"));

router.get('/forbidden', (req, res, next) =>{
    const myErr = new Error('my new error');
    myErr.type = 'redirect';
    console.log(myErr.type);
    next(myErr);
})
router.get('/faulty', (req, res, next) =>{
    const myErr = new Error('new error');
    myErr.type = 'internal';
    next(myErr);
})
router.get('/internalerror', (req, res, next) =>{
    res.status(500);
    res.send('Server Error')
})
router.get('/notfound', (req, res) => {
    res.status(403);
    res.send('Seite nicht gefunden');
})
router.use((err, req, res, next) => {
    const entry = `${new Date().toISOString()}:${err.type}\n`;
    fs.writeFileSync('err_log.txt', entry, {flag:'a',
});
next(err);
})

router.use((err, req, res, next) => {
    if(err.type === 'redirect') {
        res.redirect('/notfound');
    } else {
        res.redirect("/internalerror");
    }
    next(err);
});

export default router;