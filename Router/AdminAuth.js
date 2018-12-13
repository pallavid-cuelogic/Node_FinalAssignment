import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/',function(req,res){
    res.sendFile(path.join('/home/pallavi/CuelogicWork/Node/Final_Assignment' + '/Public'+'/AdminAuth.html'))
})

module.exports = router;