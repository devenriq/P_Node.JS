const http = require("http");

http.createServer(router).listen(3000);

function router(req, res) {
  console.log("nueva petición");
  console.log(req.url);

  switch (req.url) {
    case "/hola":
      res.write("Hola, que tal");
      res.end();
      break;

    default:
      res.write("error 404");
      res.end();
      break;
  }

  res.writeHead(201, { "Content-Type": "text/plain" });

  res.write("Hola, ya se usar HTTP de NodeJS");

  res.end();
}

console.log("Escuchando http en el puerto 3000");
