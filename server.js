const http = require("http");

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = (module.exports.app = express());

const server = http.createServer(app);
const io = require("socket.io")(server);

const mongoose = require("mongoose");
const routes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

io.on("connection", function (socket) {
  console.log("a user connected");
  socket.on("delete book", function (title) {
    console.log("deleted book: " + title);
    io.emit("show delete message", title);
  });
  socket.on("save book", function (title) {
    console.log("saved book: " + title);
    io.emit("show save message", title);
  });
  socket.on("ping", function () {
    socket.emit("pong", "pong");
  });
});

server.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
