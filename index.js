import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
const server = app.listen(3000);
const io = require('socket.io').listen(server);
io.set('origins', 'http://localhost:3000');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(cors());

 import signupRouter from './router/signup';
 import signinRouter from'./router/signin';
 import profileRouter from'./router/profile'; 
 import updateRouter from './router/update';
 import searchRouter from './router/search';
 import userdataRouter from './api/userdata';
 import searchUserRouter from './api/searchUser';

 app.use('/',signupRouter);
 app.use('/signin',signinRouter);
 app.use('/profile',profileRouter);
 app.use('/update',updateRouter);
 app.use('/userdata',userdataRouter);
 app.use('/search',searchRouter);
 app.use('/searchuser',searchUserRouter);

//app.listen(3000);

io.on('connection', function (socket) {
    socket.emit('news', { hello: 'welcome to my app' });
    socket.on('my other event', function (data) {
      console.log(data.msg);
    });
});

io.of('/signin')
.on('connection', function (socket) {
     socket.emit('news', {hello: 'welcome to signin page'});
});

io.of('/profile')
.on('connection', function (socket) {
     socket.emit('news', {hello: 'welcome to your Profile'});
     socket.on('my other event', function (data) {
        console.log(data.msg);
      });
});

console.log('server running on port 3000');