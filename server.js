var io = require('socket.io'),
  connect = require('connect');
  //var paper = require('paper');

var app = connect().use(connect.static('public')).listen(8888);

var drawing_room = io.listen(app);
var picture = new Object();

drawing_room
  .on('connection', function(socket) {
  socket.on('channel', function(data) {
    //imports
    channel_id = data;
    socket.emit('import', picture[channel_id]); 
  });  
  socket.on('onMouseDown', function(data) {
    socket.broadcast.emit("onMouseDown"+data.channel, data);
  });
  socket.on('onMouseDrag', function(data) {
    socket.broadcast.emit("onMouseDrag"+data.channel, data);
  });
  socket.on('onMouseUp', function(data) {
    socket.broadcast.emit("onMouseUp"+data.channel, data);
  });
  socket.on('update',function(data){
    console.log(data);
    picture[data.channel] = data.JSON;
    console.log('le')
    console.log(picture);
  });
});
