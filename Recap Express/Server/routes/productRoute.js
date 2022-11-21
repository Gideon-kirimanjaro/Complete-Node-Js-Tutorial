//------------------------------------------------------GET,POST,PUT,DELETE mini router
const express = require("express");
const {
  getProducts,
  postProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/PeopleContoller");
const router = express.Router();

//-------------------------------------------------get
router.get("/", getProducts);
//-------------------------------------------------post
router.post("/", postProduct);
//-----------------------------------------------------put
router.put("/update/:key", updateProduct);
//-------------------------------------------------delete
router.delete("/delete/:key", deleteProduct);
module.exports = {
  router,
};
