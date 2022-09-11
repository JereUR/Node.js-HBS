//Initial config
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

//Template engine
const hbs = require("hbs");
hbs.registerPartials(__dirname + "/views/partials", function (err) {});
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

//Detail routes
app.get("/", (req, res) => {
  res.render("index", {
    title: "Start",
  });
});

app.get("/service", (req, res) => {
  res.render("service", {
    title: "Service",
    state: true,
    service: "Service Area",
  });
});

app.get("/team", (req, res) => {
  res.render("team", {
    title: "Team",
    /* team: ["Player 1", "Player 2"], */
    team: [
      { id: "#1", name: "Player 1" },
      { id: "#2", name: "Player 2" },
    ],
  });
});

//Server start
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
