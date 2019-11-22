const fs = require("fs");
const express = require("express");
const apiRouter = express.Router();

//Matches /api/notes
apiRouter.get("/notes", function(req, res) {
  fs.readFile("./data/db.json", function(err, data) {
    if (err) {
      return console.log(err);
    }

    res.json(JSON.parse(data).notes);
  });
});
apiRouter.post("/notes", function(req, res) {
  fs.readFile("./data/db.json", function(err, data) {
    if (err) {
      return console.log(err);
    }

    var newData = JSON.parse(data);
    newData.currentId++;
    const newId = newData.currentId;
    newData.notes.push({ ...req.body, id: newId });
    fs.writeFile("./data/db.json", JSON.stringify(newData), function(err) {
      if (err) {
        return console.log(err);
      }

      console.log("The file was saved!", req.body);
      res.json(req.body);
    });
  });
});
apiRouter.delete("/notes/:id", function(req, res) {
  if (isNaN(+req.params.id)) {
    res.status(500).send("ID is invalid");
  }
  fs.readFile("./data/db.json", function(err, data) {
    if (err) {
      return console.log(err);
    }

    var newData = JSON.parse(data);
    //Id in question is req.params.id
    // const objectIndex = newData.notes.findIndex(function(data) {
    //   return data.id === +req.params.id;
    // });
    // newData.notes.splice(objectIndex, 1);
    newData.notes = newData.notes.filter(function(data) {
      return data.id !== +req.params.id;
    });
    fs.writeFile("./data/db.json", JSON.stringify(newData), function(err) {
      if (err) {
        return console.log(err);
      }

      console.log("The file was saved!", req.body);
      res.json(req.body);
    });
  });
});

module.exports = apiRouter;
