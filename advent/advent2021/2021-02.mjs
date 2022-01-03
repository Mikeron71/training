import * as fs from "fs";

// ____________________________________________________________________________PART ONE

// const contenu = fs.readFileSync("./2021-02DATA.txt", "utf-8");

// let lignes = contenu.split("\r\n");
// //console.log(lignes);

// let totalDistance = 0;
// let totalDepth = 0;
// for (let ligne of lignes) {
//   let splitLine = ligne.split(" ");

//   // je veux separer le mouvement et la distance
//   let mouvement = splitLine[0];
//   let distance = parseInt(splitLine[1]); //parseint pour mettre la distance en number et non string

//   if (mouvement === "forward") {
//     totalDistance += distance;
//   }
//   if (mouvement === "down") {
//     totalDepth += distance;
//   }
//   if (mouvement === "up") {
//     totalDepth -= distance;
//   }
// }

// let reponse = totalDepth * totalDistance;
// console.log(reponse);

// //____________________________________________________________________________PART TWO
