const BandList = require("./band-list");

class Sockets {
  constructor(io) {
    this.io = io;
    this.bandList = new BandList();
    this.socketsEvents();
  }

  socketsEvents() {
    // Conexion
    this.io.on("connection", (socket) => {
      console.log("Client connection");
      //  Emitir al cliente conectado todas las bandas actuales
      socket.emit("current-bands", this.bandList.getBands());
    });
  }
}

module.exports = Sockets;
