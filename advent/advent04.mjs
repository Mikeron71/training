import * as fs from "fs";

const contenu = fs.readFileSync("./data04.txt", "utf-8");

//separrer mes lignes
const contenuSplit = contenu.split("\n\n");
console.table(contenuSplit);
