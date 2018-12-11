import express from 'express';
const router = express.Router();
import path from 'path';
import userData from '../Model/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const secretekey = 'imsecrete'

router.get('/',function(req,res){
   res.sendFile(path.join('/home/pallavi/CuelogicWork/Node/Final_Assignment' + '/Public'+'/SignIn.html'))
})

router.post('/',function(req,res){
    let uname = req.body.username;
    let password = req.body.password
    userData.find({},function(err,users){
        if(err){
            throw err;
        } else{
            users.forEach(user => {
                if(user.UserName === uname){
                    if(bcrypt.compareSync(password, user.Password)) {                        
                        var token = jwt.sign({
                                username:uname
                            },
                            secretekey,
                            {
                                expiresIn: '3h'
                            });
                            console.log("Logged In Successfullly ");
                            res.json({token:token});
                    }else {
                        console.log("Credientials not Authorised");
                    }
                }
            })
        }
    })
});

module.exports = router;