import { appendFile } from "fs";
import db from "../data/init_lowdb.js"
import express from 'express'

db.read();

const  uid = (num) => {
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result1= Math.random().toString(36).substring(num);       

  return result1;
}
console.log(uid(7));


function getAllTodos(req, res) {
    res.send(db.data.todos);
  };

async function createTodo(req, res) {
    const newtodo = req.body;
    newtodo.id = uid(7);
    db.data.todos.push(newtodo);
    await db.write();
    res.send("POST request erhalten");
}

function updateTodo(req, res) {

}

async function deleteTodo(req, res) {
  const id = req.params.id;
  const todos = db.data.todos;
  const todosToKeep = todos.filter((todosObj) => todosObj.id !== id);
  db.data.todos = todosToKeep;
  await db.write();
  res.send("todo deleted");
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

 PATCH / PUT updateTodo (UPDATE)
 
 DELETE deleteTodo (DELETE) DIMA

 routes ALECU
 error AISHA

*/