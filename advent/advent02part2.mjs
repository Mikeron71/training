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
  console.table(splitLine);

  // Parametre 0
  const positions = splitLine[0].split("-");
  const pos1 = positions[0];
  const pos2 = positions[1];
  console.log("pos1:", pos1, "pos2:", pos2);

  // Parametre 1
  const letter = splitLine[1].slice(0, 1);
  console.log("Letter:", letter);
  // Paramatre 2
  const password = splitLine[2];
  //console.log("password:", password);
  // Validation password

  // Trouver le count
  //console.log("plength=", password.length);
  let count = 0;
  for (let i = 0; i < password.length; i++) {
    if (password.substring(pos1, pos1 + 1) === letter) {
      count++;
      if (password.substring(pos2, pos2 + 1) === letter) {
        count++;
      }
    }
  }
  //console.log(count);

  // valider le count
  if ((count = 1)) {
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

// Each policy actually describes two positions in the password, where 1 means the first character, 2 means the second character, and so on.
// (Be careful; Toboggan Corporate Policies have no concept of "index zero"!) Exactly one of these positions must contain the given letter. Other occurrences of the letter are irrelevant for the purposes of policy enforcement.
