const express = require("express");
const cors = require("cors");
const server = express();
const users = require("./users.js");

server.use(cors());

server.get("/", (req, res) => {
  const { q } = req.query;
  const keys = ["first_name", "last_name", "email"];

  const filteredUsers = users.filter((user) =>
    keys.some((key) => user[key].toLowerCase().includes(q))
  );

  res.status(200).json(filteredUsers);
  
});

server.listen(5000, () => {
  console.log("Server listening");
});
