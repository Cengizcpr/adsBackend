const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const mongoose = require("mongoose");
const config = require("./config/db");
const rateLimit = require("express-rate-limit");
require("dotenv").config();
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
// rate limiting applies to all routes
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 10000, // limit each IP to 100 requests per
  message: "Too many requests, please try again after 15 minutes",
});
app.use(limiter);

//mongodb path
mongoose
  .connect(config.url, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected."))
  .catch((err) => console.log(err));

//token control function
function middleToken(req, res, next) {
  if (req.headers.auth_token == process.env.AUTH_TOKEN) {
    next();
  } else {
    res.send("Unauthorized token access!");
  }
}

//Run first time if ads database is empty
/*const funFirst = require('./functions/firstCreate');
funFirst.firstCreate();*/

const ads = require("./router/ads");
app.use("/ads", middleToken, ads);

// Run the server!
app.listen(1071, (err, address) => {
  if (err) throw err;
  console.log("Server is now listening on 1071");
});
