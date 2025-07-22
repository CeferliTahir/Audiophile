const Joi = require("joi");

const imageSchema = Joi.object({
  mobile: Joi.string().required(),
  tablet: Joi.string().required(),
  desktop: Joi.string().required(),
});

const includeItemSchema = Joi.object({
  quantity: Joi.number().integer().min(1).required(),
  item: Joi.string().required(),
});

const gallerySchema = Joi.object({
  first: imageSchema.required(),
  second: imageSchema.required(),
  third: imageSchema.required(),
});

const otherProductSchema = Joi.object({
  slug: Joi.string().required(),
  category: Joi.string().required(),
  name: Joi.string().required(),
  image: imageSchema.required(),
});

function productValidation(product) {
  const schema = Joi.object({
    slug: Joi.string().required(),
    name: Joi.string().required(),
    image: imageSchema.required(),
    category: Joi.string().required(),
    categoryImage: imageSchema.required(),
    new: Joi.boolean().required(),
    price: Joi.number().min(0).required(),
    description: Joi.string().required(),
    features: Joi.string().required(),
    includes: Joi.array().items(includeItemSchema).required(),
    gallery: gallerySchema.required(),
    others: Joi.array().items(otherProductSchema).required(),
  });

  return schema.validate(product, { abortEarly: false });
}

module.exports = productValidation;
