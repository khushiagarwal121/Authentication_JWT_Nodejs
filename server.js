require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
// Setup logging in server.js
const morgan = require("morgan");
const logger = require("./config/logger");

const app = express();
app.use(morgon("combined"));
connectDB();

app.use(bodyParser.json());

app.use("/api/auth", require("./routes/auth"));

// Error-handling middleware (after all other middleware and routes)
app.use((err, req, res, next) => {
  logger.error(err.stack); // Log error using winston
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server started on port ${PORT}");
});
