var io = require('socket.io'),
  connect = require('connect');
  //var paper = require('paper');

var app = connect().use(connect.static('public')).listen(8888);

var drawing_room = io.listen(app);

//Testing Persistance
var pictures1;
var pictures2;

drawing_room
  .of('/drawing1')
  .on('connection', function(socket) {
    socket.emit('import', pictures1);
  socket.on('onMouseDown', function(data) {
    socket.broadcast.emit('onMouseDown', data);
  });
  socket.on('onMouseDrag', function(data) {
    socket.broadcast.emit('onMouseDrag', data);
  });
  socket.on('onMouseUp', function(data) {
    socket.broadcast.emit('onMouseUp', data);
  });
  socket.on('export', function(data) {
    socket.broadcast.emit('export', data);
    pictures1 = data;
    console.log("EXPORT________");
    console.log(data);
  });

});

drawing_room
  .of('/drawing2')
  .on('connection', function(socket) {
    socket.emit('import', pictures2);
  socket.on('onMouseDown', function(data) {
    socket.broadcast.emit('onMouseDown', data);
  });
  socket.on('onMouseDrag', function(data) {
    socket.broadcast.emit('onMouseDrag', data);
  });
  socket.on('onMouseUp', function(data) {
    socket.broadcast.emit('onMouseUp', data);
  });
  socket.on('export', function(data) {
    socket.broadcast.emit('export', data);
    pictures2 = data;
    console.log("EXPORT________");
    console.log(data);
  });
});
