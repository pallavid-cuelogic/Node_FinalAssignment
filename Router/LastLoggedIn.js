const express = require("express");
const router = express.Router();

var userActivity = require('../Model/UserActivity');
var authenticate = require('../Middleware/Validation');

router.get("/", (req, res, next) => {
    res.sendFile(path.join('/home/pallavi/CuelogicWork/Node/Final_Assignment' + '/Public'+'/LastLoggedIn.html'))   
})

module.exports = router;