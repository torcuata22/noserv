const http = require("http");

// function rqListener(req, res) {}
// http.createServer(rqListener);

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>My test headers</title>");
  res.write("<body><h1>Hello from my Node server!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000); //creates looping process taht keeps listening for requests
// http
//   .createServer((req, res) => {
//     // Respond to the request with a basic message
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.write("Hello, this is a basic Node server!");
//     res.end();
//   })
//   .listen(3000, () => {
//     console.log("Server is listening on port 3000");
//   });
