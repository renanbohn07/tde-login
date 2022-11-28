const express = require ("express");
const session = require('express-session')
const path = require ("path");
const bodyParser = require ("body-parser");
const routes = require ("./app/routes/index");

const database = require("./app/config/dbConnect");

database.on("error", console.log.bind(console,"DB não conectado."));
database.once("open", () => {
    console.log("DB conectado com sucesso.")
})

const app = express ();

app.use (express.json());

app.use(session({
    secret: '123456',
    resave: true,
    saveUninitialized: true
  }))
  app.use(bodyParser.urlencoded({extended: true}))
  app.set("views", path.join(__dirname, "./public/"));
  app.set("view engine", "ejs");
  app.use(express.static("public"));

  routes (app)

  module.exports = app;
