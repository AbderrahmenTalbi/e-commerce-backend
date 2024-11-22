const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  richdescription: {
    type: String,
    default: "",
  },
  image: [
    {
      type: String,
      default: "",
    },
  ],
  images: [
    {
      type: String,
    },
  ],
  brand:{
    type: String,
    default: "",
  },
  price:{
    type: Number,
    default: 0,
  },
  category:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
    min:0,
  },
  rating:{
    type: Number,
    default: 0,
  },
  revnum:{
    type: Number,
    default: 0,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  }
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;