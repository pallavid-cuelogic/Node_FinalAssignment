import express from 'express';
const router =express.Router();
import jwt from 'jsonwebtoken';
import userData from '../model/user';

router.get('/',function(req,res){
    jwt.verify(req.query.token, 'imsecrete',function(err,decode){
        if(err){
            throw err;
        } else {
            userData.findOne({UserName : decode.username},function(err,user){
                var user = {
                    UserName : user.UserName,
                    FName : user.FName,
                    LName : user.LName 
                }
                res.json(user);
            })
        }
    })    
})

router.put('/',function(req,res){
    userData.findOneAndUpdate({UserName : req.body.username},{FName:req.body.fname , LName:req.body.lname},function(err,doc){
        if(err){
            throw err;
        } else {
            console.log("updated successfully");
        }
    })
})

module.exports = router;