const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const Products = require("./models/ProductsModel");
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));

app.use(express.json());
app.use(cors({ origin: "*", credentials: true }));

app.get("/api/", (req, res) => res.send("Bienvenue sur mon API !"));

app.get("/api/products", (req, res) => res.send(Products.getAll));
