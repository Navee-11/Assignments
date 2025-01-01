const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const { Course } = require("../db");
const router = express.Router();

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  //Check if the username already exists
  Admin.create({
    username: username,
    password: password,
  })
    .then(() => {
      res.json({
        message: "Admin created successfully",
      });
    })
    .catch((err) => {
      res.json({
        message: "Admin doesn't exists",
      });
    });
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;
  // Use zod while creating the a real world project for validation
  Course.create({
    title,
    description,
    imageLink,
    price,
  }).then((value) => {
    console.log(value);
    res.json({
      message: "Course created successfully",
      courseid: value._id,
    });
  });
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  Course.find({}).then((response) => {
    res.json({
      courses: response,
    });
  });
});

module.exports = router;
