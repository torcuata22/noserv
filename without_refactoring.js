const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
      console.log(chunk);
    });

    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody); // Log parsed body here
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message); // Write parsed body to file
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>My test headers</title>");
  res.write("<body><h1>Hello from my Node server!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
