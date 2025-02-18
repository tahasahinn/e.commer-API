const express = require("express");
const {
  allProducts,
  detailProducts,
  deleteProduct,
  createProduct,
  updateProduct,s
  createReview,
  adminProducts,
} = require("../controllers/product.js");
const { authenticationMid, roleCehcked } = require("../middleware/auth.js");

const router = express.Router();
router.get("/products", allProducts);
router.get(
  "/admin/products",
  authenticationMid,
  roleCehcked("admin"),
  adminProducts
);
router.get("/products/:id", detailProducts);
router.post(
  "/product/new",
  authenticationMid,
  roleCehcked("admin"),
  createProduct
);
router.post("/product/newReview", authenticationMid, createReview);
router.delete(
  "/products/:id",
  authenticationMid,
  roleCehcked("admin"),
  deleteProduct
);
router.put(
  "/products/:id",
  authenticationMid,
  roleCehcked("admin"),
  updateProduct
);

module.exports = router;
