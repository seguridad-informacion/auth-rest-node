const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const { ProductRoutes, UserRoutes } = require("./routes");

const app = express();

// Database
mongoose
  .connect("mongodb://localhost:27017/mydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.use(ProductRoutes);
app.use(UserRoutes);

// Port
const PORT = process.env.PORT || 8080;

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
