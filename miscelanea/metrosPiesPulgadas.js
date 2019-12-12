// 2. Convertir metros a pies y a pulgadas (1 Metro = 39.37 pulgadas)

const readlineSync = require('readline-sync');

const metrosPies = (metros) => {
  const pies = metros * 3.2808;
  return pies;
}

const metrosPulgadas = (metros) => {
  const pulgadas = metros * 39.370;
  return pulgadas
}

const metrosIngresados = readlineSync.question('\nIngrese una cantdiad en metros para convertir a pies y pulgadas ');
console.log(metrosIngresados, "metros equivalen a:", metrosPies(metrosIngresados).toFixed(2), "Pies");
console.log(metrosIngresados, "metros eqivalen a:", metrosPulgadas(metrosIngresados).toFixed(2), "Pulgadas");
