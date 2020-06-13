// set up the server for the application
// require express
const express = require("express");
// create a new app with express
const app = express();
// set up a new port
const PORT = 8080;

// require routes from htmlRoutes and apiRoutes files
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

// set up middleware to handle POST data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// use the routes from htmlRoutes file
app.use("/", htmlRoutes);
// use the routes from the apiRoutes file
app.use("/api", apiRoutes);

// set up the server to listen on the designated port
app.listen(PORT, () => {
  console.log(`Server is running`);
});
