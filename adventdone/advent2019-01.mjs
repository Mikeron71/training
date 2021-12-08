import * as fs from "fs";

const contenu = fs.readFileSync("./advent2019-01.txt", "utf-8");

//take its mass, divide by three, round down, and subtract 2.
//calculate the fuel needed for the mass of each module (your puzzle input), then add together all the fuel values.
//

//separer data en ligne
const ligne = contenu.split("\n");

//console.table(ligne)

// j'utilise .map  pour pass une fonction sur chaque element de l'array
const fuel = ligne.map(function calculateFuel(mass) {
  let resultat = Math.floor(mass / 3) - 2;
  return resultat;
});

// console.table(fuel);
// let sum = 0;
// for (let i = 0; i < fuel.length; i++) {
//   sum += fuel[i];
// }
// console.log(sum);

//partie 2

const totalFuel = fuel.map((f) => {
  let moreFuel = f;
  let remaining = f;
  let ligne = `${f} + `;
  while (true) {
    let resultat = Math.floor(remaining / 3) - 2;
    if (resultat <= 0) break;
    moreFuel += resultat;
    remaining = resultat;
    ligne += `${resultat} + `;
  }
  console.log(ligne);
  return moreFuel;
});
// const fuel = ligne.map(function calculateFuel(mass) {
//   let resultat = Math.floor(mass / 3) -2;
//   let counter = resultat;
//   while (resultat > 5) {
//     resultat = Math.floor(resultat / 3) - 2;
//     counter += resultat;
//     console.log(counter);
//     console.log(resultat);
//   }
// });

console.table(totalFuel);

const fusee = totalFuel.reduce((sum, value) => sum + value, 0);

console.log(fusee);
// let sum = 0;
// for (let i = 0; i < fuel.length; i++) {
//   sum += fuel[i];
// }
// //console.log(sum)
