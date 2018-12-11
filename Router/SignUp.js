import express from 'express';
import path from 'path';
import validation from '../Middleware/Validation';
import bcrypt from 'bcrypt';
import userData from '../Model/User';
const router = express.Router();

router.get('/',function(req,res){
   res.sendFile(path.join('/home/pallavi/CuelogicWork/Node/Final_Assignment' + '/Public'+'/SignUp.html'))
})

router.post('/',validation,function(req,res){
        let password = req.body.password;
        let hash = bcrypt.hashSync(password, 10);
        let user = {
            UserName: req.body.username,
            Password: hash,
            FName:req. body.fname,
            LName:req. body.lname
        }
        let data = new userData(user);
        data.save();  
        res.json("Registered Successfully");
});

module.exports = router;