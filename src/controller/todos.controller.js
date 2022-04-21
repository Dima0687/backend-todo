import db from "../data/init_lowdb.js"

db.read();

function getAllTodos(req, res) {

}

function createTodo(req, res) {

}

function updateTodo(req, res) {

}

async function deleteTodo(req,res) {
  const deleteId = req.params.id;
  const del = db.data.todos.filter(todo => todo.id !== deleteId)
  db.data.todos = del;
  await db.write(); 
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