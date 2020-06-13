// require express router
const router = require("express").Router();
// require Notebook class file so the functions can be used
const Notebook = require("../db/Notebook");

// get request for "/api/notes"
// call the getNotes() from the Notebook class
// res.json(note)

// post request for "/api/notes"
// call the addNotes() from the Notebook class
// res.json(note)

// delete request for "/api/notes:id"
// call the deleteNote() from the Notebook class
//

module.exports = router;
