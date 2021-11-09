import * as fs from "fs"; 
 
const contenu = fs.readFileSync("./advent2019-01.txt", "utf-8"); 
 
//take its mass, divide by three, round down, and subtract 2. 
//calculate the fuel needed for the mass of each module (your puzzle input), then add together all the fuel values. 
// 
 
//separer data en ligne 
  
const ligne = contenu.split('\n') 
 
//console.table(ligne) 
 
 
 
const fuel = ligne.map(function calculateFuel(mass) { 
    let  resultat = Math.floor(mass /3) -2 
    let counter = resultat
     while (resultat > 5) {
    resultat = Math.floor(resultat /3) -2;
    counter += resultat 
    console.log(counter)
         console.log(resultat)
     }
    
}) 
 
 //console.log(fuel)
 
//console.table(fuel) 
let sum = 0 
for (let i = 0; i < fuel.length; i++) { 
sum += fuel[i] 
} 
//console.log(sum) 

 
 
 
