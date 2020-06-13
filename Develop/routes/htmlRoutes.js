// install packages
// path
const path = require("path");
// express (router from express)
const router = require("express").Router();

// get /notes route
// sendFile() - directory, filename you want to display

// get "*" route
router.get("*", (req, res) => {
  return res.send("Welcome to the home page");
});
// sendFile() - directory, filename you want to display

// export the router
module.exports = router;
