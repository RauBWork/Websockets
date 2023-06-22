const path = require("path");

// Servidor de express
const express = require("express");

// Servidor de sockets
const http = require("http");

// Configuraciones de sockets
const socketIO = require("socket.io");

// Clase personalizada de sockets
const Sockets = require("./sockets");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT ;

    // Http server
    this.server = http.createServer(this.app);

    // Configuraciones de sockets
    this.io = socketIO(this.server, {
      /* configs */
    });
  }

  middlewares() {
    // Desplegar el directorio publico
    this.app.use(express.static(path.resolve(__dirname, "../public")));
  }

  configurarSockets() {
    new Sockets(this.io);
  }

  execute() {
    // Iniciar midelwares
    this.middlewares();

    this.configurarSockets();

    // Iniciar servidor
    this.server.listen(this.port, () => {
      console.log("Server listening on: ", this.port);
    });
  }
}

module.exports = Server;
