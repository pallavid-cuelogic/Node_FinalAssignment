import express from 'express'
const router = express.Router();
import path from 'path';
import bodyParser from 'body-parser';
const app = express();
import authetication from '../middleware/auth.js';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

router.get('/',authetication,function(req,res){
    res.sendFile(path.join('/home/abhishek/NodeFinal' + '/public'+'/update.html'))
})

module.exports=router;