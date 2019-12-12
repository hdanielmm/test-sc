// 1. Calcular los múltiplos de 4 comprendidos entre 4 y NaN, donde N es un valor introducido por consola.

const readlineSync = require('readline-sync');

const showMultiples = (number) => {
  let multiples = [];
  for(let i = 4; i <= number; i++) {
    if(i % 4 === 0){
      multiples.push(i);
    }
  }
  return multiples;
}

const limiteIngresado = readlineSync.question('\nIngrese el límite a calcular: ');
console.log("Los múltiplos de 4 hasta", limiteIngresado, "son:", showMultiples(limiteIngresado));