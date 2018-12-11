import express from 'express';
const router =express.Router();
import userData from '../model/user';

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