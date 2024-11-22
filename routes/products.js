const express = require("express");
const Product = require("../models/product");
const { Category } = require("../models/category");
const router = express.Router();

router.get(`/`, async (req, res) => {
  const productlist = await Product.find();
  if (!productlist) {
    res.status(500).json({ success: false });
  }
  res.send(productlist);
});

router.post(`/`, async (req, res) => {
  try {
    const category = await Category.findById(req.body.category);
    if (!category) return res.status(400).send("Category not found");
    let product = new Product({
      name: req.body.name,
      description: req.body.description,
      richdescription: req.body.richdescription,
      image: req.body.image,
      images: req.body.images,
      brand: req.body.brand,
      price: req.body.price,
      category: req.body.category,
      countInStock: req.body.countInStock,
      isFeatured: req.body.isFeatured,
      rating: req.body.rating,
      revnum: req.body.revnum,
      images: req.body.images,
    });
    product = await product.save();
    console.log(product);
    res.send(product);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
