const Joi= require('joi');

const schema = Joi.object().keys({
  username:Joi.string().required(),
  password:Joi.string().required(),
  fname:Joi.string().required(),
  lname:Joi.string().required() 
});

const validation = (req,res,next) => {
    Joi.validate(req.body,schema,function(err,value){
      if(err){
        res.json("Invalid");
      }else{
        next();
      }
    })
}

export default validation;