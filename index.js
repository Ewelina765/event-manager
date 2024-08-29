const http = require("http");

const server = http.createServer();

server.listen(3001, () => {
  console.log("Server started");
});

server.on("request", (req, res) => {
  res.write("hello world");
  res.end();
});
