const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: "*", credentials: true }));

app.get("/api/", (req, res) => res.send("Bienvenue sur mon API !"));
