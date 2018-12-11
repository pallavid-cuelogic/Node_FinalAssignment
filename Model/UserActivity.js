import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/nodefinal',{ useNewUrlParser: true });
const Schema = mongoose.Schema;

let userActivitySchema = new Schema({
    UserName:String,
    IP:String,
    Date:String,
    UA:String
})

let userActivity = mongoose.model('userActivity',userActivitySchema);

module.exports = userActivity;