const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const PORT = 5000;

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket) {
  console.log("a player connected");
  socket.on("chat message", function(msg) {
    console.log("message: " + msg);
    io.emit("chat message", msg);
  });
});

http.listen(PORT, function() {
  console.log(`LISTENING ON PORT: ${PORT}`);
});
