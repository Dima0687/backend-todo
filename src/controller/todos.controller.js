import db from "../data/init_lowdb.js"

db.read();

function getAllTodos(req, res) {

}

function createTodo(req, res) {

}

async function updateTodo(req, res) {
  const { id } = req.params;
  const database = db.data.todos;
  const todo = database.find(todo => todo.id === id);

  const newTodo = {
    ...todo,
    ...req.body
  }
  const filteredDatabase = database.filter(todo => todo.id !== id);
  filteredDatabase.push(newTodo);

  db.data.todos = filteredDatabase;
  await db.write();
  res.send(newTodo);
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

 PATCH / PUT updateTodo (UPDATE) DIMA
 
 DELETE deleteTodo (DELETE) ALECU

 routes ALECU
 error AISHA

*/