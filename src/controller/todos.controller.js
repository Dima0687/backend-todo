const logger = ( req, res, next) => {
  console.log('ich bin der logger aus dem ordner controller')
  next();
}

export default logger

/*
  Mehrere Seiten (endpunkte)

  z.B.:

  / => Information über die Seite, Links, welche Daten angeboten werden
  /api/v1/todos => CRUD 
  Express Router => routes + controller
  Logging von todo erstellt, todo (gelesen), todo gepatcht / put, todo gelöscht
  /contact  => // wenn zeit da ist ( front end )
*/