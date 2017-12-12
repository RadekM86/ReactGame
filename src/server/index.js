const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const socketIo = require('socket.io');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config.js');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname + "/dist"));
app.use(webpackDevMiddleware(webpack(webpackConfig)));
app.use(bodyParser.urlencoded({extended: false}));

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
      });
    socket.on('checked', (checked)=>{
        this.socket.broadcast.emit('checked', checked)
    })
  });
  
server.listen(4000);


// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

// let rooms = [];
// let counter = 0;

// app.get('/', function(req, res){
//     res.send('<h1>Hello world</h1>');
//   });


//   app.get('/rooms', function(req, res){
//     res.send(JSON.stringify(rooms));
//   });
  
//   io.on('connection', function(socket){
//     console.log('a user connected');
//     rooms.push({room: counter++, playersNo:1,nowMove:1});
//     socket.join('game');  //w tym miejscu zmienna, którą podaje drugi gracz
//     socket.on('player', (msg)=>{
//             console.log("changePlayer")
//             io.to('game').emit('player', msg)
//       });
//   });

  
 
//   http.listen(4000, function(){
//     console.log('listening on *:4000');
//   });
      


