const express = require("express");
const path = require("path");
const User = require("../Model/User");
const router = express.Router();
const { upload } = require("../Multer");
const ErrorHandler = require("../utils/erroHandler");
const catchAsyncError = require("../middleware/catchAsyncError");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");


router.post("/create-user", upload.single("file"), async (req, res) => {
  console.log("create user");
  console.log(req.body);
  const { name, email, password } = req.body;
})