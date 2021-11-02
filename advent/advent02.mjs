import * as fs from "fs";

const contenu = fs.readFileSync("./data02.txt", "utf-8");

const contenuSplit = contenu.split("\n");

//console.table(contenuSplit);

/**
 * Resoudre valide que la ligne représente un password valide
 * @param ligne {string}
 * @returns
 */

function resoudre(ligne) {
  const splitLine = ligne.split(" ");
  //console.table(splitLine);

  // Parametre 0
  const minMax = splitLine[0].split("-");
  const min = Number(minMax[0]);
  const max = Number(minMax[1]);
  //console.log("Min:", min, "Max:", max);

  // Parametre 1
  const letter = splitLine[1].slice(0, 1);
  //console.log("Letter:", letter);
  // Paramatre 2
  const password = splitLine[2];
  //console.log("password:", password);
  // Validation password

  // Trouver le count
  //console.log("plength=", password.length);
  let count = 0;
  for (let i = 0; i < password.length; i++) {
    if (letter === password.charAt(i)) {
      count += 1;
      //   console.log(count);
    }
  }

  // valider le count
  if (count >= min && count <= max) {
    return true;
  }

  return false;
}

let goodPword = 0;
for (let j = 0; j < contenuSplit.length; j++) {
  const resultat = resoudre(contenuSplit[j]);
  if (resultat) {
    goodPword++;
  }
}
console.log("il y a " + goodPword + " bons mots de passe");
