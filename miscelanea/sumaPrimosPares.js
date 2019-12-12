// 4. Leer un archivo que solo contiene números y sumar los números pares y arrayNumerosPrimos.

const read = require('read-file');

const esPrimo = n => {
  if (n == 0 || n == 1) return false;
  const limit = Math.round(Math.sqrt(n));
  for (let i = 2; i <= limit; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const arrayNumerosPares = array => {
  const arrayNumeros = array;
  const numerosPares = arrayNumeros.filter(i => i % 2 === 0);
  return numerosPares;
}

const arrayNumerosPrimos = array => {
  const arrayNumeros = array;
  const numerosPrimos = arrayNumeros.filter(i => esPrimo(i));
  return numerosPrimos;
}

const sumaPares = array => {
  let contador = 0;
  for (let i = 0; i < array.length; i++) {
    contador = contador + parseInt(array[i]);
  }
  return contador;
}

const sumaPrimos = array => {
  let contador = 0;
  for (let i = 0; i < array.length; i++) {
    contador = contador + parseInt(array[i]);
  }
  return contador;
}

read('numeros.txt', 'utf8', function (err, buffer) {
  const nums = buffer.split("\n");
  console.log("La suma de los numeros pares en el archivo es de:", sumaPares(arrayNumerosPares(nums)));
  console.log("La suma de los números primos en el archivo es de:", sumaPrimos(arrayNumerosPrimos(nums)));
});