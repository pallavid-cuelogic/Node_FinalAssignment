import express from 'express';
import userData from '../Model/User';

const router = express.Router();

router.post('/',function(req,res){
    let username=req.body.username;
     
    if(username === "all") {
        userData.find({},function(err,user){
            if(err) {
                throw err;
            } else {
                res.json(user);
            }
        })
    } else {
        userData.findOne({UserName:username},function(err,user){
            if(err) {
                throw err;
            } else {
                res.json(user);
            }
        })    
    } 
})

module.exports = router;