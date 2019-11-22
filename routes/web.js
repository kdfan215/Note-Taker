const express = require("express");
const webRouter = express.Router();
const path = require("path");

webRouter.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

webRouter.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "notes.html"));
});

webRouter.get("*", function(req, res) {
  res.redirect("/");
});

module.exports = webRouter;
