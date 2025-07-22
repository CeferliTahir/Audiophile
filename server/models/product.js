const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  mobile: { type: String, required: true },
  tablet: { type: String, required: true },
  desktop: { type: String, required: true },
});

const includeItemSchema = new mongoose.Schema({
  quantity: { type: Number, required: true },
  item: { type: String, required: true },
});

const gallerySchema = new mongoose.Schema({
  first: imageSchema,
  second: imageSchema,
  third: imageSchema,
});

const otherProductSchema = new mongoose.Schema({
  slug: { type: String, required: true },
  category: { type: String, required: true },
  name: { type: String, required: true },
  image: imageSchema,
});

const productsSchema = new mongoose.Schema({
  slug: { type: String, required: true },
  name: { type: String, required: true },
  image: imageSchema,
  category: { type: String, required: true },
  categoryImage: imageSchema,
  new: { type: Boolean, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  features: { type: String, required: true },
  includes: [includeItemSchema],
  gallery: gallerySchema,
  others: [otherProductSchema],
});

module.exports = mongoose.model("Product", productsSchema);
