import * as fs from "fs";

const contenu = fs.readFileSync("./data04.txt", "utf-8");

//separrer mes lignes
const passeport = contenu.split("\n\r");
const requiredFields = console.table(passeport);

//creer mes object de passport
