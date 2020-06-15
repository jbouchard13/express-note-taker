// require uuidv4 package to generate an id {id : uuidv4(), title: "", text: "",}
const { uuid } = require("uuidv4");
const fs = require("fs");

class Notebook {
  constructor(id, title, text) {
    this.id = id;
    this.title = title;
    this.text = text;
  }
  getNotes() {
    // inside of this function
    // READ from db.json file
    fs.readFile("/db.json", (err, data) => {
      if (err) throw err;
      return data;
    });
    // the contents of the json file will be displayed on the page
    // to read a file - readFile() (part of "fs" package)
  }
  // ---------------------------------------------------------------
  addNotes(req) {
    // inside of this function
    const addedNote = {
      // create a unique id with uuid
      id: { uuid },
      // take the user's input title
      title: req.body.title,
      // take the user's input text
      text: req.body.text,
    };
    // you want to write to the file
    // using writeFile()
    fs.writeFile("/db.json", (err, addedNote) => {
      if (err) throw err;
      console.log(addedNote, "Note added");
    });
  }
  // ----------------------------------------------------------------
  deleteNotes() {
    // check against all of the notes to see which one has the id the user selected to delete
    // call getNotes() and then filter the results to find the id you need and return the ones that don't match
  }
}

module.export = {
  Notebook,
};
