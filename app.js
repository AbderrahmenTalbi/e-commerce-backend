const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv/config");
const api = process.env.API_URL;

const categoriesRoutes = require("./routes/categories");
const productsRoutes = require("./routes/products");
const usersRoutes = require("./routes/users");
const ordersRoutes = require("./routes/orders");

//middlewares
app.use(bodyparser.json());
app.use(morgan("tiny"));

//routers
app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(3000, () => {
  console.log("Server is running on port 3000:http://localhost:3000");
});
