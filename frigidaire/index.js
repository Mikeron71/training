let listeRepas = [
  "pokebowl",
  "buddahbowl",
  "pizza",
  "tofu general tao",
  "macaronis chinois",
  "pate chinois",
  "burger",
  "burger vege",
  "tacos",
  "fajitas",
  "spagetti",
  "lasagne",
];

function getRandomNumber() {
  const number = Math.floor(Math.random() * 12);
  return number;
}

const lundi = listeRepas[getRandomNumber()];
const mardi = listeRepas[getRandomNumber()];
const mercredi = listeRepas[getRandomNumber()];
const jeudi = listeRepas[getRandomNumber()];
const vendredi = listeRepas[getRandomNumber()];

let textSemaine = `Voici votre menu de la semaine : 
  Lundi : ${lundi} 
  Mardi : ${mardi}
  Mercredi : ${mercredi}
  Jeudi : ${jeudi}
  Vendredi : ${vendredi}
  Bonne semaine`;

console.log(textSemaine);
console.log(textSemaine);
