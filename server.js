var io = require('socket.io'),
  connect = require('connect');
var paper = require('paper');

var app = connect().use(connect.static('public')).listen(8888);

var drawing_room = io.listen(app);

drawing_room.sockets.on('connection', function(socket) {

  console.log(socket.id);

  socket.on('newpoint', function(data) {
    socket.broadcast.emit('broadcastnewpoint', {new: data});
  });

  socket.on('disconnect', function() {
  });

});
