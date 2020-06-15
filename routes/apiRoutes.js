// require express router
// require path to grab the db json file
// require fs to read, write, and delete from files
// require uuidv4 to generate random ids
const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const { uuid } = require("uuidv4");

// use path to grab the db file with the saved notes to a variable
const noteDb = path.join(__dirname, "../db/db.json");

// get request for "/notes" page
router.get("/notes", (req, res) => {
  // read from the notes db
  fs.readFile(noteDb, "utf-8", (err, notes) => {
    // if an error occurs, throw that error
    if (err) throw err;
    // parse the json data so it can be read on the front end
    res.json(JSON.parse(notes));
  });
});

// post request for "/notes" page
router.post("/notes", (req, res) => {
  // call the addNotes() from the Notebook class
  const note = Notebook.addNotes(req);
  return res.json(note);
});

// delete request for "/notes:id" page
router.delete("/notes:id", (req, res) => {});
// call the deleteNote() from the Notebook class
//

module.exports = router;
