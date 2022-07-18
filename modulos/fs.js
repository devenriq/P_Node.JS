const fs = require("fs");

const leer = (route, cb) => {
  fs.readFile(route, (err, data) => {
    cb(data.toString());
  });
};

const escribir = (ruta, contenido, cb) => {
  fs.writeFile(ruta, contenido, (err) => {
    if (err) {
      console.error("No he podido escribirlo" + err);
    } else {
      console.log("Se ha escrito correctamente");
    }
  });
};

const borrar = (route, cb) => {
  fs.unlink(route, (err) => {});
};

// escribir(__dirname + "/archivo1 .txt", "Soy un archivo nuevo", console.log);
// leer(__dirname + "/archivo1.txt", console.log);
borrar(__dirname + "/archivo1.txt", console.log);
