// 3. Calcular la suma de los cuadrados de los 100 primeros números naturales.

const sumaCuadrados = (limit) => {
  const array = [];
  for (let i = 1; i <= limit; i++) {
    array.push([i] * [i]);
  }
  return array;
}

console.log(sumaCuadrados(100));