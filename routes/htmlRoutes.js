// install packages
// path
const path = require("path");
// express (router from express)
const router = require("express").Router();

const sendHtml = (res, filename) => {
  // sendFile() - directory, filename you want to display
  // referenced dave's code from hot restauraunt for this function
  // use path to join together the location of the html files depending on the input arguments
  return res.sendFile(path.join(__dirname, "..", "public", filename));
};

// get /notes route
router.get("/notes", (req, res) => {
  return sendHtml(res, "notes.html");
});

// get "*" route
router.get("/", (req, res) => {
  return sendHtml(res, "index.html");
});

// export the router
module.exports = router;
