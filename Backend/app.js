const express = require("express");
const app = express();
const errorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(cookieParser());
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended : true, limit: "50mb" }));

if(process.env.NODE_ENV !== "Production"){
    require("dotenv").config({
        path: "backend/config/.env",
    });
};

const user = require("./Controller/User");

app.use("/api/v2/user", user);

app.use(errorHandler);

module.exports = app;