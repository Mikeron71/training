function getUserChoice(userInput) {
  userInput = userInput.toLowerCase();
  if (
    userInput === "roche" ||
    userInput === "papier" ||
    userInput === "ciseaux"
  ) {
    return userInput;
  } else {
    return "Erreur!!!";
  }
}

function getComputerChoice() {
  rNumber = Math.floor(Math.random() * 3);
  switch (rNumber) {
    case 0:
      return "roche";
      break;
    case 1:
      return "papier";
      break;
    case 2:
      return "ciseaux";
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "sorry partie nulle";
  }
  if (userChoice === "roche" && computerChoice === "ciseaux") {
    return "Bravo tu gagnes!";
  }
  if (userChoice === "papier" && computerChoice === "roche") {
    return "bravo tu gagnes!";
  }
  if (userChoice === "ciseaux" && computerChoice === "papier") {
    return "bravo tu gagnes!";
  } else {
    return "oopsie l'ordi gagne";
  }
}

function playGame(choixJoueur) {
  const userChoice = getUserChoice(choixJoueur);
  const computerChoice = getComputerChoice();
  console.log("tu as choisis " + userChoice);
  console.log("L'ordi a choisi " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

const choix = ["roche", "roche", "roche", "papier", "papier", "ciseaux"];
for (game = 0; game < choix.length; game++) {
  const element = choix[game];

  playGame(element, "ciseaux");
}
