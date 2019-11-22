const express = require("express");
const router = require("./routes");
const app = express(); //creates instance of express application and assigning it to app

const PORT = process.env.PORT || 3000; //if true it will run on heroku injected port
app.use(express.static("./public/assets"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(PORT, function(err) {
  if (err) {
    throw err;
  }
  console.log("APP RUNNING ON PORT: " + PORT);
});
