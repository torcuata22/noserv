const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text'><button type='submit'>send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>My test headers</title>");
  res.write("<body><h1>Hello from my Node server!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
