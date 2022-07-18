let suma = 0;

console.time("bucle");

for (let i = 0; i < 10000; i++) {
  suma += 1;
}

console.timeEnd("bucle");

console.time("asincrono");
asincrona().then(() => {
  console.timeEnd(asincrona);
});

function asincrona() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Termina el proceso asíncrono");
      resolve;
    }, 1000);
  });
}
