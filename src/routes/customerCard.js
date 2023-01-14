/* Importing the express module. */
const express = require("express");
/* Importing the customerCardSchema from the models folder. */
const customerCardSchema = require("../models/customerCardSchema");

/* Creating a router object. */
const router = express.Router();

/* This is a post request to the server. It is asking for the data to be saved in the database. */
router.post("/customerCard", (req, res) => {
  const customer = customerCardSchema(req.body);
  customer
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

/* This is a get request to the server. It is asking for all the data in the database. */
router.get("/getAllCustomerCard", (req, res) => {
  customerCardSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;