const express = require("express");
const app = express();
const connectToDB = require("./db/index");
const healthcheckRouter = require("./routes/healthcheck.routes");
const urlRouter = require("./routes/url.routes");
const staticRouter = require("./routes/static.routes");
const path = require("path");
require("dotenv").config();
const PORT = process.env.PORT || 8001;
const mongodburi = `${process.env.MONGODBURI}/url-shortner`;



try {
  connectToDB(mongodburi).then(() => {
    console.log("MongoDB Connected!");
  });
} catch (error) {
  return error;
}

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/url", healthcheckRouter, urlRouter);
app.use("/", staticRouter);

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.listen(PORT, () => {
  console.log("Server Started!");
});
