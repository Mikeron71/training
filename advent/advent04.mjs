import * as fs from "fs";

const contenu = fs.readFileSync("./data04.txt", "utf-8");

//separrer mes lignes
const contenuSplit = contenu.split("\n\n");
//console.table(contenuSplit)

let passeportTest = contenuSplit[0]

//console.log(passeportTest)

//creer  un objet avec tous les parametres

 let passeport0 = passeportTest.split('\n')
 //console.log(passeport0)

 //mettre le passeport sur une string?

let stringpasseport = passeport0.toString();
//console.log(stringpasseport)

let donePasseport = stringpasseport.replaceAll(' ', ',')
//console.log(donePasseport)

//test objects
let pass = {
    donePasseport
}

console.log(

//verifier si les passeports contiennent tous les objets