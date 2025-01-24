const express = require("express");
const path = require("path");
const user = require("../Model/user");
const router = express.Router();
const {upload} = require("../Multer");
const errorHandler = require("../utils/errorHandler");


router.post("/create-user", upload.single("file"), async(req, res) => {
    const {name, email, password} = req.body;
    const userEmail = await User.findOne({email});

    if(userEmail) {
        return next(new errorHandler("User already exists", 400));
    }
})