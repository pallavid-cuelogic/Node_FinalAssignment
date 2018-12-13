import express from 'express';
const router =express.Router();
import jwt from 'jsonwebtoken';
import userData from '../Model/User';

router.get('/',function(req,res){
    jwt.verify(req.query.token, 'SecreteKey',function(err,decode){
        if(err){
            throw err;
        } else {
            userData.findOne({UserName : decode.username},function(err,user){
                var user = {
                    UserName : user.UserName,
                    FName : user.FName,
                    LName : user.LName 
                }
                console.log(user);
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
            console.log("Information Added Successfully");
        }
    })
})

module.exports = router;