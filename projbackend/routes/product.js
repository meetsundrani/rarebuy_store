const express = require("express");
const router = express.Router();

const {
  getProductById,
  createProduct,
  getProduct,
  photo,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getAllUniqueCategories,
} = require("../controllers/product");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

//all of params
router.param("userId", getUserById);
router.param("productId", getProductById);

//all of actual routes
//create
router.post(
  "/product/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createProduct
);
//read product
router.get("/product/:productId", getProduct);
//optimized code for loading binary data
router.get("/product/photo/:productId", photo);

//update product
router.put(
  "/product/:productId/:userId",
  isAdmin,
  isAuthenticated,
  isSignedIn,
  updateProduct
);

//delete product
router.delete(
  "/product/:productId/:userId",
  isAdmin,
  isAuthenticated,
  isSignedIn,
  deleteProduct
);
module.exports = router;

//listing all products
router.get("/products", getAllProducts);

//get allUniqueCategory
router.get("products/categories", getAllUniqueCategories);
