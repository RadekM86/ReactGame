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