const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// regster
router.post("/register", async (req, res) => {
  try {
    // generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // save user
    const user = await new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    await user.save();
    res.send("ok");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("wrong password");

    user && validPassword
      ? res.status(200).json(user)
      : res.send("login failed");
  } catch (error) {
    res.status(500).jason(error);
  }
});

module.exports = router;
