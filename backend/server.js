const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const projectRoutes = require("./routes/projectRoutes");
const PORT = process.env.PORT || 5000;
const swagger = require("./swagger");
const cors = require("cors");
const authMiddleware = require("./middleware/authMiddleware");
require("dotenv").config();

var allowedOrigins = ["http://localhost:5173"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  mongoose
    .connect(
      "mongodb://0.0.0.0:27017/pms?readPreference=primary&directConnection=true&ssl=false"
    )
    .then((data) => {
      console.log("mongodb connected");
    })
    .catch((err) => {
      console.log(err);
    });
});
app.use((req, res, next) => {
  // Exclude login and register routes from authentication
  if (
    ["/api/auth/login", "/api/auth/register"].includes(req.path) ||
    req.path.includes("api-docs")
  ) {
    next();
  } else {
    authMiddleware(req, res, next);
  }
});
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);

swagger(app);
module.exports = app;
