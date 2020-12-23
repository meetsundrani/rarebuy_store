const express = require("express");
const router = express.Router();
const { updateStocks } = require("../controllers/product");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");
const { getUserById, pushOrderInPurchaseList } = require("../controllers/user");
const {
  getOrderById,
  createOrder,
  getAllOrders,
  getOrderStatus,
  updateStatus,
} = require("../controllers/order");
//all of params
router.param("userId", getUserById);
router.param("orderId", getOrderById);

//Actual routes

//create route
router.post(
  "/order/create/:userId",
  isSignedIn,
  isAuthenticated,
  pushOrderInPurchaseList,
  updateStocks,
  createOrder
);

//read route
router.get(
  "/order/all/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  getAllOrders
);

//update route
router.put(
  "/order/:orderId/status/:userId",
  isAdmin,
  isAuthenticated,
  isSignedIn,
  updateStatus
);
router.get(
  "/order/:orderId/status/:userId",
  isAdmin,
  isAuthenticated,
  isSignedIn,
  getOrderStatus
);
module.exports = router;
