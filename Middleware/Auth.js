import jwt from 'jsonwebtoken';

const authentication = (req,res,next) =>{
    jwt.verify(req.query.id, 'imsecrete',function(err,decode){
        if(err){
            res.send("unauth");
        } else {
            console.log("Autheticate");
            next();
        }
    })
}

export default authentication;