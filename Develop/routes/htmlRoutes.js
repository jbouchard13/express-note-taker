// install packages
// path
const path = require("path");
// express (router from express)
const router = require("express").Router();

const sendHtml = (res, filename) => {
  return res.sendFile(path.join(__dirname, "..", "public", filename));
};

// get /notes route
router.get("/notes", (req, res) => {
  return sendHtml(res, "notes.html");
});
// sendFile() - directory, filename you want to display

// get "*" route
router.get("*", (req, res) => {
  return sendHtml(res, "index.html");
});
// sendFile() - directory, filename you want to display

// export the router
module.exports = router;
