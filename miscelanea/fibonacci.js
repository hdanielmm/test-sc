// 6. Calcular el n-ésimo término de la serie Fibonnaci

function fibonacci(n) {
  if(n === 0 || n === 1){
    return 1;
  }
  if(n > 1) {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));