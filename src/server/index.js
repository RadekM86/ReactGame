var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

let rooms = [];
let counter = 0;

app.get('/', function(req, res){
    res.send('<h1>Hello world</h1>');
  });


  app.get('/rooms', function(req, res){
    res.send(JSON.stringify(rooms));
  });
  
  io.on('connection', function(socket){
    console.log('a user connected');
    rooms.push({room: counter++, playersNo:1,nowMove:1});
    socket.join('game');  //w tym miejscu zmienna, którą podaje drugi gracz
    socket.on('player', (msg)=>{
            console.log("changePlayer")
            io.to('game').emit('player', msg)
      });
  });

  
 
  http.listen(4000, function(){
    console.log('listening on *:4000');
  });
      
// var app = express();
// var server = app.listen(4000, function(){
//     console.log('listening on port 4000')
// });


// app.use(express.static('public'));
// app.get('/', function(req, res){
//     res.send('<h1>Hello world</h1>');
//   });

// var io = socket(server);

// io.on('connection', function(socket){
//     console.log('player connected', socket.id)
// })

