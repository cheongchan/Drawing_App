var io = require('socket.io'),
  connect = require('connect');
  //var paper = require('paper');

var app = connect().use(connect.static('public')).listen(8888);

var drawing_room = io.listen(app);

drawing_room.sockets.on('connection', function(socket) {

  socket.on('onMouseDown', function(data) {
    socket.broadcast.emit('onMouseDown', data);
  });
  socket.on('onMouseDrag', function(data) {
    socket.broadcast.emit('onMouseDrag', data);
  });
  socket.on('onMouseUp', function(data) {
    socket.broadcast.emit('onMouseUp', data);
  });

});
