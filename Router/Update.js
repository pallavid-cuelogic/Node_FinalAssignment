import express from 'express'
import path from 'path';
import bodyParser from 'body-parser';
import authetication from '../Middleware/Auth.js';

const router = express.Router();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

router.get('/',authetication,function(req,res){
    res.sendFile(path.join('/home/pallavi/CuelogicWork/Node/Final_Assignment' + '/Public'+'/Update.html'))
})

module.exports=router;