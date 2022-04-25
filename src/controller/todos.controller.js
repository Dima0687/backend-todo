import crypto from 'crypto';
import db from "../data/init_lowdb.js"
import { createError } from '../error/err1.js';

// err1

db.read();

const  uid = (num) => {
  let id = crypto.randomBytes(num).toString('hex'); // num * 2 ist die länge am ende
  return id
}

async function getAllTodos (req, res, next) {
  try {
    const todos = db.data.todos;
  if(!todos) {
    return next(new Error())
  } 
    res.status(200).json({msg: "success", data: todos}); 
  } catch (error) {
    console.log(error)
  }
  };

async function createTodo(req, res, next) {

  try{
      const newtodo = req.body;
      if(!newtodo.name) {
        return next (createError("Name nicht vorhanden", 400));
      }
      newtodo.id = uid(7);
      newtodo.completed = false;
      newtodo.createdAt = new Date().toLocaleString("de-DE");
      newtodo.updatedAt = new Date().toLocaleString("de-DE");
      db.data.todos.push(newtodo);
      await db.write();
      res.status(200).json({msg: "success", data:newtodo});
    } catch (err) {
      console.log(err)
    }
}

async function updateTodo(req, res, next) {
  try{

    const { id } = req.params;
    const database = db.data.todos;
    if(!database){
      return next(new Error());
    }
    const todo = database.find(todo => todo.id === id);

    // gefunden also truthy
    // nicht gefunden === undefined ===> falsy
    // if (falsy) hier kommen wir niemals rein
    // darum if(!falsy) => if(true) hier kommen wir nun rein

    if(!todo){
      return next(createError(`Todo mit dieser ID: ${id} wurde nicht gefunden`, 404))
    } else {
      const newTodo = {
        ...todo,
        ...req.body, 
        updatedAt: new Date().toLocaleString("de-DE")
      }
      const filteredDatabase = database.filter(todo => todo.id !== id);
      filteredDatabase.push(newTodo);
    
      db.data.todos = filteredDatabase;
      await db.write();
      res.status(200).json({msg: "updated", data:newTodo}); 
    }
  } catch(err){
    console.log(err)
  }
}

async function deleteTodo(req,res, next) {
  try{
    const deleteId = req.params.id;
    const objIsThere = db.data.todos.find(todo => todo.id === deleteId);

    if(!objIsThere) {
      return next (createError("ID ist falsch. Bitte überprüfen Sie die ID nochmal", 400));
    }
    const del = db.data.todos.filter(todo => todo.id !== deleteId)
    db.data.todos = del;
    await db.write(); 
    res.status(200).json({msg: "deleted"});
  } catch (err) {
    console.log(err)
  }
  
}

export {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo
}
/*
  Mehrere Seiten (endpunkte)

  z.B.:

  / => Information über die Seite, Links, welche Daten angeboten werden
  /api/v1/todos => CRUD 
  Express Router => routes + controller
  Logging von todo erstellt, todo (gelesen), todo gepatcht / put, todo gelöscht
  /contact  => // wenn zeit da ist ( front end )
*/


/* 
 POST (CREATE) createTodo
 GET => FELIX (READ) getAllTodos

 PATCH / PUT updateTodo (UPDATE) DIMA
 
 DELETE deleteTodo (DELETE) ALECU

 routes ALECU
 error AISHA

*/