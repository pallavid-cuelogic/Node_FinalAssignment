import jwt from 'jsonwebtoken';

const authentication = (req,res,next) =>{
    jwt.verify(req.query.id, 'imsecrete',function(err,decode){
        if(err){
            res.send("Invalid");
        } else {
            console.log("Autheticated");
            next();
        }
    })
}

export default authentication;