import express from 'express';
import path from 'path';
import moment from 'moment';
import useragent from 'express-useragent';
import requestIp from 'request-ip';
import jwt from 'jsonwebtoken';
import userActivity from'../Model/UserActivity';   

const router = express.Router();

router.get('/',function(req,res){

   let source = req.headers['user-agent'],
   ua = useragent.parse(source);

   let clientIp = requestIp.getClientIp(req);
   let date = moment().format("MMMM Do YYYY, h:mm:ss a");

   jwt.verify(req.query.id,'imsecrete',function(err,decode){
       if(err){
           throw err;
       } else  {
           let activity = {
               UserName : decode.username,
               IP:clientIp,
               UA:ua.source,
               Date: date
           }
           userActivity.findOneAndUpdate({UserName:decode.username}, activity, {upsert:true}, function(err, doc){
                if (err) return res.send(500, { error: err });
        });
           
       }
   })
   res.sendFile(path.join('/home/pallavi/CuelogicWork/Node/Final_Assignment' + '/Public'+'/Profile.html'))
})

module.exports=router;