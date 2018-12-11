import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/UserInfo',{ useNewUrlParser: true });
const Schema = mongoose.Schema;

let userDataSchema = new Schema({
    UserName:String,
    Password:String,
    FName:String,
    LName:String
})

let userData = mongoose.model('User',userDataSchema);

module.exports = userData;