// require express router
const router = require("express").Router();
// require Notebook class file so the functions can be used
const Notebook = require("../db/Notebook.js");

// get request for "/api/notes"
router.get("/api", (req, res) => {
  Notebook.getNotes();
  // call the getNotes() from the Notebook class
  // res.json(note)
});

// post request for "/api/notes"
router.post("", (req, res) => {
  // call the addNotes() from the Notebook class
  const note = Notebook.addNotes();
  res.json(note);
});

// delete request for "/api/notes:id"
router.delete("", () => {});
// call the deleteNote() from the Notebook class
//

module.exports = router;