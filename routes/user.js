const router = require("express").Router();

router.get("/usertest", (req, res) => {
  res.send("User Succesfull!");
});

module.exports = router;
