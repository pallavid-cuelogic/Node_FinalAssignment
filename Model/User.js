import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/nodefinal',{ useNewUrlParser: true });
const Schema = mongoose.Schema;

let userDataSchema = new Schema({
    UserName:String,
    Password:String,
    FName:String,
    LName:String
})

let userData = mongoose.model('userData',userDataSchema);

module.exports = userData;