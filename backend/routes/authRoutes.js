const express = require("express");
const { registerUser, loginUser } = require("../controller/authController.js");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/isLoggedIn", (req, res) => {
  // Get the token from the request headers
  const token = req?.header("Authorization")?.replace("Bearer ", "");

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.TOKEN);
    req.user = decoded;
    res.state(200).json({ message: "authorized" });
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
});
module.exports = router;
