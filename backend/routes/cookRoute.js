const express = require("express");
const router = express.Router();

const { registerCook, getCooks } = require("../controllers/cookController");
const upload = require("../middleware/upload");

router.post("/", upload.fields([
    { name: "profilePhoto", maxCount: 1 },
    { name: "document", maxCount: 1 },
]), registerCook
);

router.get("/", getCooks);

module.exports = router;