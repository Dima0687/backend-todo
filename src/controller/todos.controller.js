import db from "../data/init_lowdb.js"

db.read();

const  uid = (num) => {
  // const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = Math.random().toString(36).substring(/* 0, */num);  // Maximum sind aufgrund von *.random() 13 zeichen
  return result;
}

function getAllTodos(req, res) {
    res.send(db.data.todos); 
    // Ich weiß, uns wurde res.send gezeigt und ich weiß auch das es funktioniert, weil es unterstützt wird
    // aber ich denke WIR sollten vielleicht das etwas aussagekräftigere res.json(...) nehmen, habe ich bisher auch noch nicht
    // in diesem Projekt

    // Auch hier // Todo: etwas ausgeben womit das Fron End weiter arbeiten könnte, siehe unten

    // Außerdem sollten WIR überall try catch machen und dort dann den error handler aufrufen den Aisha uns schreibt
  };

async function createTodo(req, res) {
    const newtodo = req.body;
    newtodo.id = uid(7);
    db.data.todos.push(newtodo);
    await db.write();
    res.send("POST request erhalten"); // TODO: Etwas ausgeben womit das Front End weiter arbeiten könnte, siehe unten
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
  res.send(newTodo); // TODO: muss noch statusCode und msg an das Front End geschrieben werden
}

async function deleteTodo(req,res) {
  const deleteId = req.params.id;
  const del = db.data.todos.filter(todo => todo.id !== deleteId)
  db.data.todos = del;
  await db.write(); 
  res.send()// TODO: Benachrichtigungen an das Front End schicken z.B. { msg: 'hat alles geklappt etc.pp. } statusCode 200
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