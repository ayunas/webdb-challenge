const express = require("express");
const server = express();
const bodyParser = express.json();
const projectRouter = require("./projectRouter");
const taskRouter = require("./taskRouter");

server.use(bodyParser);

server.get("/", (req, res) => {
  res.status(200).send("`<h2>Welcome to Projects</h2>");
});

server.use("/projects", projectRouter);
server.use("/tasks", taskRouter);

module.exports = server;
