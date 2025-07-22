const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/public", express.static(path.join(__dirname, "public")));

const products = require("./routes/products");
app.use("/all/products", products);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}/${process.env.MONGODB_DBNAME}?retryWrites=true&w=majority&appName=Cluster0`
  );
  console.log("Successfully connected to database");
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
