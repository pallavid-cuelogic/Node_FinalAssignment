import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/UserInfo',{ useNewUrlParser: true });
const Schema = mongoose.Schema;

let userActivitySchema = new Schema({
    UserName:String,
    IP:String,
    UA:String,
    Date:String
})

let userActivity = mongoose.model('UserActivity',userActivitySchema);

module.exports = userActivity;