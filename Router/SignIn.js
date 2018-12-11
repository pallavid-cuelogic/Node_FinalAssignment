import express from 'express';
const router = express.Router();
import path from 'path';
import userData from '../model/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const secretekey = 'imsecrete'

router.get('/',function(req,res){
   // res.sendFile(path.join('H:\\NodeFinal'+'\\public'+'\\signin.html'));
   res.sendFile(path.join('/home/abhishek/NodeFinal' + '/public'+'/signin.html'))
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
                                expiresIn: '2h'
                            });
                            console.log("login successful");
                            res.json({token:token});

                       } else {
                        console.log("login unsuccessful");
                       }
                }
            })
        }
    })
});

module.exports = router;