const { products } = require("../data/products");

const getProducts = (req, res) => {
  res.json(products);
};

const postProduct = (req, res) => {
  const { id, name } = req.body;
  if (name.length > 1) {
    res.send("Name is too long");
  }
  res.send("Success");
};

const updateProduct = (req, res) => {
  const { key } = req.params;
  const { description, price } = req.body;
  products.find((item) => {
    if (item.id === Number(key)) {
      item.description = description;
      item.price = price;
      res.send(item);
    }
  });
};
const deleteProduct = (req, res) => {
  const { key } = req.params;
  products.splice(1, Number(key));
  res.send(products);
};

module.exports = {
  deleteProduct,
  updateProduct,
  getProducts,
  postProduct,
};
