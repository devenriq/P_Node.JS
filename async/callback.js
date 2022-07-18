function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log("Hola, " + nombre);
    miCallback(nombre);
  }, 1000);
}

const adios = (nombre, otroCallback) => {
  setTimeout(() => {
    console.log("Adios ", nombre);
    otroCallback();
  }, 1000);
};

console.log("Estoy antes del proceso");

hola("Enrique", (nombre) => {
  adios(nombre, () => {
    console.log("Estoy luego del proceso");
  });
});
