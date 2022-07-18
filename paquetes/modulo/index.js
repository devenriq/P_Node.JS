// Traer el módulo con el que se quiere trabajar

const modulo = require("./modulo");

// Ejecutar la función del módulo traído

// console.log(modulo);
const { saludar, prop1 } = modulo;

console.log(saludar(), prop1);
