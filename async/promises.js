function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hola, " + nombre);
      resolve(nombre);
    }, 1000);
  });
}

const hablar = (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("bla bla bla bla...");
      resolve(nombre);
    }, 1000);
  });
};

const adios = (nombre) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Adios ", nombre);
      reject("Ha habido un error en la promesa de adios");
    }, 1000);
  });
};

console.log("Iniciando el proceso");

hola("Enrique")
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then((nombre) => {
    console.log("Terminado el proceso");
  })
  .catch((error) => {
    console.error("Se ha producido un error: " + error);
  });
