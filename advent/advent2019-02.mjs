import * as fs from "fs";

const contenu = fs.readFileSync("./data2019-02.txt", "utf-8");

console.log(contenu);

let indNums = contenu.split(",");

//console.table(indNums);
