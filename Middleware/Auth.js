import jwt from 'jsonwebtoken';

const authentication = (req,res,next) =>{
    jwt.verify(req.query.id, 'SecreteKey',function(err,decode){
        if(err){
            res.send("Invalid");
        } else {
            console.log("Autheticated");
            next();
        }
    })
}

export default authentication;