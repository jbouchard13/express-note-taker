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
  // grab the array of json data from db file
  const notesJsonDb = fs.readFileSync(noteDb);
  // parse the data from the db file
  const notesParsed = JSON.parse(notesJsonDb);

  // create a new note when the user hits submit
  const note = {
    // create unique id with uuid
    id: uuid(),
    // grab the user's title input
    title: req.body.title,
    // grab the user's text input
    text: req.body.text,
  };
  // push the new note to the notesParsed array
  notesParsed.push(note);
  // turn the note object to a string so it can be saved
  const notesStr = JSON.stringify(notesParsed);
  // write the new note to the db file
  fs.writeFile(noteDb, notesStr, (err, note) => {
    if (err) throw err;
    console.log(notesStr, "Note added");
  });
  // response with the new note
  res.json(notesStr);
});

// delete request for "/notes:id" page
router.delete("/notes:id", (req, res) => {
  // when the user goes to delete the selected note
  // filter the db array to find the selected note's id
  // save the new array to the db file
  // return the new array the page
});

module.exports = router;
