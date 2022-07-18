function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log("Hola, " + nombre);
    miCallback(nombre);
  }, 1000);
}

const hablar = (callbackHablar) => {
  setTimeout(() => {
    console.log("bla bla bla bla...");
    callbackHablar();
  }, 1000);
};

const adios = (nombre, otroCallback) => {
  setTimeout(() => {
    console.log("Adios ", nombre);
    otroCallback();
  }, 1000);
};

// console.log("Estoy antes del proceso");

// hola("Enrique", (nombre) => {
//   adios(nombre, () => {
//     console.log("Hola, " + nombre);
//   });
// });

const conversation = (nombre, veces, callback) => {
  if (veces > 0) {
    hablar(() => {
      conversation(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
};

hola("Enrique", (nombre) => {
  conversation(nombre, 3, () => {
    adios(nombre, () => {
      console.log("proceso terminado");
    });
  });
});
