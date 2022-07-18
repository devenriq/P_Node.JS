// const process = require("process");

process.on("beforeExit", () => {
  console.log("El proceso está por acabar");
});

process.on("exit", () => {
  console.log("El proceso acabó");
});

process.on("uncaughtException", (err, origin) => {
  // process.on("uncaughtRejection");
  console.error("Vaya, se nos ha olvidado capturar un error");
  console.error(err);
});

funcionQueNoExiste();
