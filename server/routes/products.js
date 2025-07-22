const express = require("express");
const router = express.Router();

const Product = require("../models/product");
const validateProduct = require("../validations/productValidation");

// GET ALL
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.send(products);
});

// POST
router.post("/", async (req, res) => {
  const { error } = validateProduct(req.body);

  if (error) {
    return res.status(400).json({
      success: false,
      errors: error.details.map((err) => err.message),
    });
  }

  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product: savedProduct,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

// GET CATEGORY
router.get("/category/:categoryName", async (req, res) => {
  const categoryName = req.params.categoryName;

  try {
    const products = await Product.find({ category: categoryName });

    if (products.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No products found in category: ${categoryName}`,
      });
    }

    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

module.exports = router;
