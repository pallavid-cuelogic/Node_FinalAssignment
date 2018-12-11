import express from 'express';
import path from 'path';
import validation from '../middleware/validation';
import bcrypt from 'bcrypt';
import userData from '../model/user';
const router = express.Router();

router.get('/',function(req,res){
   res.sendFile(path.join('/home/abhishek/NodeFinal' + '/public'+'/signup.html'))
})

router.post('/',validation,function(req,res){
        let password = req.body.password;

        let hash = bcrypt.hashSync(password, 10);

        let user = {
            UserName:req.body.username,
            Password:hash,
            FName:req.body.fname,
            LName:req.body.lname
        }

        let data = new userData(user);
        data.save();  
        res.json("Successful");
});


module.exports = router;