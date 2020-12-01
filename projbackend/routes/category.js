const express = require("express");
const router = express.Router();

const { getCategoryById, createCategory } = require("../controllers/category");
const { getUserById } = require("../controllers/user");
const { isSignedIn, isAuthenticated, isAdmin } = require("../controllers/auth");

//myparams
router.param("userId", getUserById);
router.param("categoryId", getCategoryById);

//actual routes goes here
router.post(
  "/category/create/:userId",
  isAuthenticated,
  isAdmin,
  isSignedIn,
  createCategory
);
router.get("/category/get/:userId");
module.exports = router;
