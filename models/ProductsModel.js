const data = require("../data.json");

class Products {
  static getAll() {
    return JSON.stringify(data);
  }
}

module.exports = Products;
