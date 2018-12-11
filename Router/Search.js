import express from 'express';
import path from 'path';
const router = express.Router();


router.get('/',function(req,res){
    res.sendFile(path.join('/home/abhishek/NodeFinal' + '/public'+'/search.html'))
})

module.exports = router;