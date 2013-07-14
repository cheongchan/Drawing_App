var io = require('socket.io'),
  connect = require('connect');

var messagelog = [];

var storeMessages = function (name, data) {
  messagelog.push({name: name, data: data});
  if (messagelog.length > 20) messagelog.shift();
}

var app = connect().use(connect.static('public')).listen(8888);

var chat_room = io.listen(app);
var connectCounter = 0;

chat_room.sockets.on('connection', function(socket) {

  connectCounter++;
  console.log(connectCounter);

  chat_room.sockets.emit('changeCount', {message: connectCounter});

  messagelog.forEach(function(message) { 
    socket.emit('chat', {message: message.name + ": " + message.data});
  });

  messagelog.forEach(function(message) {
    socket.emit('names', {message: message.name});
  });

  socket.emit('entrance', {message: "welcome to the chat"});
  socket.broadcast.emit('entrance', {message: "A new chatter is online"});

  socket.on('addname', function(nickname) {

    socket.set('nickname', nickname);

  });

  socket.on('disconnect', function() {
    chat_room.sockets.emit('exit', {message: "Someone left"});
    connectCounter--;
    console.log(connectCounter);
    chat_room.sockets.emit('changeCount', {message: connectCounter});
  });

  socket.on('chat', function(data) {
    socket.get('nickname', function(err, name) {
      if(name == null) name = "anonPnda";
        chat_room.sockets.emit('chat', {message: name + ": " + data.message});
        storeMessages(name, data.message);
        console.log(messagelog);
    });
  });
});



