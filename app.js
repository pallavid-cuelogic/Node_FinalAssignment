import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import signupRouter from './Router/SignUp';
import signinRouter from'./Router/SignIn';
import profileRouter from'./Router/Profile'; 
import updateRouter from './Router/Update';
import searchRouter from './Router/Search';
import userdataRouter from './API/UserData';
import searchUserRouter from './API/SearchUser';

const app = express();
const server = app.listen(3000);
const io = require('socket.io').listen(server);
io.set('origins', 'http://localhost:3000');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use('/',signupRouter);
app.use('/signin',signinRouter);
app.use('/profile',profileRouter);
app.use('/update',updateRouter);
app.use('/userdata',userdataRouter);
app.use('/search',searchRouter);
app.use('/searchuser',searchUserRouter);

io.on('connection', function (socket){
    socket.on('Event', function (data){
      console.log(data.msg);
    });
});

io.of('/signin')
.on('connection', function (socket) {
     socket.emit('news', {hello: 'Sign in Page'});
});

io.of('/profile')
.on('connection', function (socket) {
     socket.emit('news', {hello: 'Your Profile Page'});
     socket.on('Event', function (data) {
        console.log(data.msg);
      });
});

console.log('Server is Running on the Port 3000');