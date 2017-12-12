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

app.use(express.static(__dirname + '/'));
app.use(webpackDevMiddleware(webpack(webpackConfig)));
app.use(bodyParser.urlencoded({extended: false}));

// io.on('connection', socket =>{
//     console.log('a user connected');
//       socket.on('message', (checkedDotsNew, round)=>{
//         console.log('działa?')
//         socket.broadcast.emit('message', {
//             checkedDotsNew,
//             round
//         })
//     })
//     socket.on('disconnect', function(){
//       console.log('user disconnected');
//     });
// });

io.on('connection', socket =>{
  
  console.log('a user connected  ' + socket.id.slice(12))
  socket.on('message', function(message){
       socket.broadcast.emit('message', JSON.parse(message)) 
       
    
})
  socket.on('disconnect', function(){
          console.log('user disconnected');
        });
})
  
server.listen(4000);