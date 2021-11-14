import * as fs from "fs";

const contenu = fs.readFileSync("./data04-carl.txt", "utf-8");

//separrer mes lignes
const contenuSplit = contenu.split("\n\n");
//console.table(contenuSplit)

const result = contenuSplit.map(decodePasseport).filter(x=> x === true).length

//console.log(passeportTest)

//creer  un objet avec tous les parametres


//console.log(donePasseport)


console.log('Result', result)

//verifier si les passeports contiennent tous les objets

// byr (Birth Year)
// iyr (Issue Year)
// eyr (Expiration Year)
// hgt (Height)
// hcl (Hair Color)
// ecl (Eye Color)
// pid (Passport ID)
// cid (Country ID)
function decodePasseport(passeportString) {
    let passeport0 = passeportString.
    replaceAll('\n', ' ').
    split(' ').
    map((t) => t.split(':'))
    
   const good = new Map(passeport0)

   if (
    hasAll(good, ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl','pid'])
   ) {
       return true
   }
   return false

}


function hasAll(mapObject,p){ 
for (const i of p) {
    const has = mapObject.has(i)
    if (has === false ) return false
}
return true
}