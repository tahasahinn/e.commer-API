const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const db = require("./config/db.js");
const product = require("./routes/product.js");
const user = require("./routes/user.js");

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cookieParser());

app.use("/", product);
app.use("/", user);

db();

const PORT = 4000;
app.listen(PORT, () => {
  console.log("Server is running on port 4000");
});
