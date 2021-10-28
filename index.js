const getUserChoice = (userInput) => {
  userinput = userInput.toLowerCase();
  if (
    userInput === "roche" ||
    userInput === "papier" ||
    userInput === "ciseaux"
  ) {
    return userinput;
  } else {
    return "Erreur!!!";
  }
};

const getComputerChoice = () => {
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
};

const determineWinner = () => {
  l;
  if (userinput === computerChoice) {
    console.log("sorry partie nulle");
  } else {
  }
};

// console.log(getUserChoice("papier"));
// //console.log(computerChoice);
