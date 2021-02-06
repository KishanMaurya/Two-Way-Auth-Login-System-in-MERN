const express = require('express')
const router = express.Router();

// middlewares
const { authCheck , adminCheck} = require("../middleware/auth");

const {upload,remove} = require("../controller/cloudinaryController")

router.post("/uploadimages", authCheck, adminCheck, upload);
router.post("/removeimage", authCheck, adminCheck, remove);

module.exports = router;

