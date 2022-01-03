import * as fs from "fs";

// ____________________________________________________________________________PART ONE

const contenu = fs.readFileSync("./2021-01DATA.txt", "utf-8");

const lignes = contenu.split("\r\n");

//lignes est un ARRAY

// function compter() {
//   let count = 0;
//   for (let i = 0; i <= lignes.length; i++) {
//     let lastPos = i - 1;
//     if (lignes[i] > lignes[lastPos]) {
//       count++;
//     }
//   }
//   count = count + 1;
//   console.log(count);
// }

// compter();

// ____________________________________________________________________________PART TWO

function compter() {
  let count = 0;
  for (let i = 0; i <= lignes.length; i++) {
    let currentSum =
      parseInt(lignes[i]) + parseInt(lignes[i - 1]) + parseInt(lignes[i + 1]);

    //console.log(currentSum);

    let pastSum =
      parseInt(lignes[i - 1]) + parseInt(lignes[i - 2]) + parseInt(lignes[i]);
    if (currentSum > pastSum) {
      count++;
    }
  }
  console.log(count);
}

compter();

// environ 1h30 a faire.
//clairement pas optimal mais fonctionnel.
