const io = require('socket.io')({
  cors: {
    origin: "*",
  },
})

let chatters = {}

const newChatMessageEvent = "newChatMessage";

io.on("connection", (socket) => {
console.log(`Client ${socket.id} connected`);


// This is for when someone initially joins a conversation
const { room } = socket.handshake.query;
socket.join(room);

//This is adding a new user to the chatters
socket.on('register-user', (user) => {
  chatters[socket.id] = user.name
  console.log(chatters)
  io.emit('update-chatter-list', Object.keys(chatters).map(id => chatters[id]))
})

// This is listening for new messages
socket.on(newChatMessageEvent, (data) => {
  io.in(room).emit(newChatMessageEvent, data);
});

// This is leaving the room if the user disconnects
socket.on("disconnect", () => {
  console.log(`Client ${socket.id} diconnected`);
  delete chatters[socket.id]
  io.emit('update-chatter-list', Object.keys(chatters).map(id => chatters[id]))
  socket.leave(room);
});
});

module.exports = io
