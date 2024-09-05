require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");

const app = express();

connectDB();

app.use(bodyParser.json());

app.use("/api/auth", require("./routes/auth"));

// Error-handling middleware (after all other middleware and routes)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server started on port ${PORT}");
});
