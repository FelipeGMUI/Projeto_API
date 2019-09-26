const express = require("express");

const routes = express.Router();
const UserControllers = require("./controllers/UserControllers");

routes.post("/user", UserControllers.store);
routes.get("/user/:email", UserControllers.index);

module.exports = routes;