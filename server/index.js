const express = require("express");
const cors = require("cors");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

const server = app.listen(process.env.PORT, function () {
    console.log("Server listening on port " + server.address().port);   
})