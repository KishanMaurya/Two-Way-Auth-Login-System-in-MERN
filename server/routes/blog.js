const express = require("express");

const router = express.Router();

// middlewares
const { authCheck , adminCheck , 
     } = require("../middleware/auth");

// controller
const {create, list, remove , read , update}  = require("../controller/blogController");

router.post('/blog', authCheck, adminCheck, create);
router.get('/blogs', list)
router.get('/blog/:_id', read)
router.put('/blog/:_id', authCheck, adminCheck, update)
router.delete('/blog/:_id', authCheck, adminCheck, remove)

module.exports = router;