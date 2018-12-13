const express = require("express");
const router = express.Router();

var userActivity = require('../Model/UserActivity');
var authenticate = require('../Middleware/Validation');

router.get("/", (req, res, next) => {
    // var now = new Date();
    // userActivity.find({},(err,result) => {
    //     console.log(result);
    //     var len = Object.keys(result).length
    //     for(var i = 0;i<len;i++){
    //         var loginDates = result[i].loginDate;
    //         var date1=moment(loginDates);
    //         //console.log("date in moment format" + date1);
    //         //console.log("logindates",loginDates)
    //         var diff = loginDates - now;
    //         console.log(diff)
    //         }
})

module.exports = router;