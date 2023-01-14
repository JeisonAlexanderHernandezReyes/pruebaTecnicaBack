/* This is importing the modules that are needed for the application. */
const express = require("express");
const initDB = require("./helpers/database");
const dotenv = require("dotenv");
const customersRoute = require("./routes/customerCard");
const path = require("path");
const fs = require("fs");
const morgan = require("morgan");

/* Loading the environment variables from the .env-local file. */
dotenv.config({ path: ".env-local" });

/* This is a way to set a default port if the environment variable is not set. */
const PORT = process.env.PORT || 3000;

/* Creating an instance of the express module. */
const app = express();

/**
 * Middleware
 */
app.use(express.json());
app.use('/api', customersRoute);

/* Creating a log file and writing to it. */
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
const logger = app.use(morgan('combined', { stream: accessLogStream }))

/**
 * Routes
 */
app.get("/", (req, res) => {
  logger(req, res, function (err) {
    if (err) return console.log(err);
    res.render('index', { title: 'Express' });
    res.setHeader("content-type", "text/plain");
    res.end("You need to specify a route");
  });
});

/**
 * Start server
 */
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

/* Calling the function that is exported from the database.js file. */
initDB();