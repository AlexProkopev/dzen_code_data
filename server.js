if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

require("./db.js");
const app = require('./app');
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

let activeConnections = 0;

// io.on("connection", (socket) => {
//   activeConnections++;
//   console.log("➕ New client connected, total:", activeConnections);
//   io.emit("activeConnections", activeConnections);

//   socket.on("disconnect", () => {
//     activeConnections--;
//     console.log("➖ Client disconnected, total:", activeConnections);
//     io.emit("activeConnections", activeConnections);
//   });
// });

io.on("connection", (socket) => {
  activeConnections++;
  console.log("➕ New client connected, total:", activeConnections);
  io.emit("activeConnections", activeConnections);
  socket.emit("activeConnections", activeConnections);
  socket.on("disconnect", () => {
    activeConnections--;
    console.log("➖ Client disconnected, total:", activeConnections);
    io.emit("activeConnections", activeConnections);
  });
});

const PORT = process.env.PORT || 10000;

server.listen(PORT, () => {
  console.log(`✅ Сервер и Socket.IO запущены на порту ${PORT}`);
});