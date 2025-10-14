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

const baseRoute = "/api";
const baseRouteProduct = `${baseRoute}/products`;

app.get(`${baseRoute}`, (req, res) => res.send("Bienvenue sur mon API !"));

const ProductsController = {
  getAll: (req, res) => res.json(Products.getAll()),
  getById: (req, res) => res.json(Products.getById(req.params.id)),
};

app.route(`${baseRouteProduct}`).get(ProductsController.getAll);

app.route(`${baseRouteProduct}/:id`).get(ProductsController.getById);
