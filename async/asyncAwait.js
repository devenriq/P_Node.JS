async function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hola, " + nombre);
      resolve(nombre);
    }, 1000);
  });
}

const hablar = async (nombre) => {
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
      console.log("Adios, ", nombre);
      resolve("Ha habido un error en la promesa de adios");
    }, 1000);
  });
};

const main = async () => {
  let nombre = await hola("Enrique");
  await hablar();
  await hablar();
  await hablar();
  await hablar();
  await adios(nombre);
};

main();
