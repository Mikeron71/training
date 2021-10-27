const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "roche" ||
    userInput === "papier" ||
    userInput === "ciseaux" ||
    userInput === "bombe"
  ) {
    return userInput;
  } else {
    return "Erreur";
  }
};

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "roche";
    case 1:
      return "papier";
    case 2:
      return "ciseaux";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bombe") {
    return "TRICHEUR (Tu gagnes)";
  }
  if (userChoice === computerChoice) {
    return "partie nulle";
  }

  if (userChoice === "roche" && computerChoice === "papier") {
    return "l'ordi gagne";
  } else if (userChoice === "papier" && computerChoice === "ciseaux") {
    return "l'ordi gagne";
  } else if (userChoice === "ciseaux" && computerChoice === "roche") {
    return "l'ordi gagne";
  } else {
    return "bravo tu gagnes";
  }
};

const playGame = (choix) => {
  const userChoice = getUserChoice(choix);
  const computerChoice = getComputerChoice();

  console.log("tu as choisi " + userChoice);
  console.log("l'ordi a choisi " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

const choix = [
  "papier",
  "ciseaux",
  "papier",
  "ciseaux",
  "papier",
  "ciseaux",
  "roche",
];

// Joue 1 game par choix ci-haut

// for (let game = 0; game < choix.length; game++) {
//   console.log("Game #", game);
//   const element = choix[game];
//   console.log(element);
//   playGame(element);
// }

// for (const game of choix) {
//   playGame(game);
// }

// Joue 1 game par choix ci-haut en utilisant chaque format de loop
