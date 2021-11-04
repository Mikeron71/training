import * as fs from "fs";

const contenu = fs.readFileSync("./data03.txt", "utf-8");

//separrer mes lignes
const contenuSplit = contenu.split("\r\n");

console.table(contenuSplit);
//rendre les lignes plus longue?

//console.log(lign.repeat(4));

// calculateTree compte le nombre d'arbre

function calculateTree() {}
