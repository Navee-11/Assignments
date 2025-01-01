const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const { Course } = require("../db");
const router = Router();
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

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

router.post("/signin", async (req, res) => {
  // Implement admin signin logic
  const username = req.body.username;
  const password = req.body.password;
  const user = await Admin.findOne({
    username: username,
    password: password,
  });
  if (user) {
    const token = jwt.sign({ username: user.username }, JWT_SECRET);
    res.json({
      message: "Admin signed in successfully",
      token,
    });
  } else {
    res.json({
      message: "Invalid credentials",
    });
  }
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
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
  Course.find({}).then((value) => {
    res.json({
      courses: value,
    });
  });
});

module.exports = router;
