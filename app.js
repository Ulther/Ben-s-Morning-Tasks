// const { router } = require("./routers/router.js");
const express = require("express");
const app = express();

app.use(express.json());

// app.use("/")

app.use(express.static("public"));

//
//
//

module.exports = { app };
