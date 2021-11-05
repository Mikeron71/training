import * as fs from "fs";

const contenu = fs.readFileSync("./data03.txt", "utf-8");

//separrer mes lignes
const contenuSplit = contenu.split("\n");

// calculateTree compte le nombre d'arbre

function calculateTree(jump, down = 1) {
  // sortir element d'une ligne ??
  //lign.slice(0,1)

  // sortir element de tous les lignes  ??
  let count = 0;
  for (let i = 0; i < contenuSplit.length; i += down) {
    const ligne = contenuSplit[i];

    let position = jump * i / down;
    let realPos = position % 31;
    const element = ligne.charAt(realPos);

    //console.log('en ligne ' + [i] + ' element: ' + element)

    //mettre un decompte dans boucle

    // si l'element = # compter +1
    if (element === "#") {
      count++;
    }
  }
  console.log(count)
  return count
}

let reponse =
calculateTree(1) *
calculateTree(3) *
calculateTree(5) *
calculateTree(7) *
calculateTree(1, 2)


console.log(reponse)
