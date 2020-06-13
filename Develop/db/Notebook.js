// require uuidv4 package to generate an id {id : uuidv4(), title: "", text: "",}
const fs = require("fs");

class Notebook {
  // getNotes()
  // inside of this function
  // READ from db.json file
  // the contents of the json file will be displayed on the page
  // to read a file - readFile() (part of "fs" package)
  //
  // addNotes()
  // inside of this function
  // you want to write to the file
  // using writeFile()
  //
  // deleteNotes()
  // check against all of the notes to see which one has the id the user selected to delete
  // call getNotes() and then filter the results to find the id you need and return the ones that don't match
}

module.export = {
  Notebook,
};
