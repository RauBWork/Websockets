class Sockets {
  constructor(io) {
    this.io = io;
    this.socketsEvents();
  }

  socketsEvents() {
    // Conexion
    this.io.on("connection", (socket) => {
      // Escuchar evento llamado 'message-to-server'
      socket.on("message-to-server", (data) => {
        console.log("data :>> ", data);
        // Emitir un evento global llamado 'message-to-server'
        this.io.emit("message-from-server", data);
      });
    });
  }
}

module.exports = Sockets;
