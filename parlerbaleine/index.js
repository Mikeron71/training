var input = "Je m'apelle Michael Rondeau";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (i = 0; i < input.length; i++) {
  for (j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      if (input[i] === "e") {
        resultArray.push("ee");
      } else {
        resultArray.push(input[i]);
      }
      if (input[i] === "u") {
        resultArray.push("uu");
      }
    }
  }
}
console.log(resultArray.join("").toUpperCase());
