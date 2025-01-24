const express = require("express");
const app = express();
const cors = require("./utils/errorHandler");

//config

if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config({
        path:"./config/.env"
    });
}
app.use((err, req, res, next) => {
    if(err instanceof ErrorHandler){
        //custom error handling logic for ErrorHandler instance
        return res.status(err.statusCode || 500).json({
            message : err.message,
            stack : err.stack,
        });
    }

    //default error handling logic for other errors
    return res.status(500).json({
        message : "Internal Server Error"});
});

module.exports = app;
