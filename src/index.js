const express = require("express");
const morgan = require("morgan");

const { ProductRoutes, UserRoutes } = require("./routes");

const app = express();

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
