const data = require("../data.json");

class Products {
  static getAll() {
    return data.produits;
  }

  static getById(id) {
    return data.produits.filter((item) => item.id == id);
  }
}

module.exports = Products;
