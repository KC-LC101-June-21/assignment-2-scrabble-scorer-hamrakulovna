// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
  word = word.toUpperCase();
  let letterPoints = "";

  for (let i = 0; i < word.length; i++) {

    for (const pointValue in oldPointStructure) {

      if (oldPointStructure[pointValue].includes(word[i])) {
        letterPoints += `Points for '${word[i]}': ${pointValue}\n`
      }

    }
  }
  return letterPoints;
}

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  console.log("Let's play some scrabble! ");
  let response = input.question("Enter a word to score: ");
  for (let i = 0; i < response.length; i++) {
    if (!(response[i] >= 'a' && response[i] <= 'z') && (response[i] >= 'a' && response[i] <= 'z')) {
      i = -1;
      console.log(`Invalid Input. Try Again!`)
      response = input.question("Enter a word to score: ");
    }
  }
  return response;
}


let simpleScore = function(word) {
  word = word.toUpperCase();
  let score = 0;
  for (let i = 0; i < word.length; i++) {
    word[i] = Number(1);
    score += 1;
  }
  return score;
}


let vowelBonusScore = function(word) {
  word = word.toUpperCase();
  let score = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] == "A" || word[i] == "E" || word[i] == "I" || word[i] == "O" || word[i] == "U" || word[i] == "Y") {
      score += 3;
    } else {
      score += 1;
    }
  } return score;
};

let scrabbleScore = function(word) {
  word = word.toLowerCase();
  let wordValue = Number(0);
  for (let i = 0; i < word.length; i++) {
    wordValue += Number(newPointStructure[word[i]]);
  }
  return wordValue;
};

const scoringAlgorithms = [
  { name: "Simple Score", description: "Each letter is worth 1 point", scoringFunction: simpleScore },
  { name: "Bonus Vowels", description: "Vowels are 3 pts, consonants are 1 pt", scoringFunction: vowelBonusScore },
  { name: "Scrabble", description: "The traditional scoring algorithm", scoringFunction: scrabbleScore }
];

function scorerPrompt(response) {
  let selectedAlgorithm = input.question(`Which scoring algorithm would you like to use?\n
0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2: `);
  while ((selectedAlgorithm != '0') && (selectedAlgorithm != '1') && (selectedAlgorithm != '2')) {
    console.log("Invalid input. Try again.");
    selectedAlgorithm = input.question(`Enter 0, 1, or 2: `);
  }
  if (selectedAlgorithm == 0) {
    console.log(`Score for '${response}': ${scoringAlgorithms[0].scoringFunction(response)}`);
  }
  else if (selectedAlgorithm == 1) {
    console.log(`Score for '${response}': ${scoringAlgorithms[1].scoringFunction(response)}`);
  } else if (selectedAlgorithm == 2) {
    console.log(`Score for '${response}': ${scoringAlgorithms[2].scoringFunction(response)}`);
  }
}

function transform(obj) {
  let transformedObj = { a: 4 };
  for (item in obj) {
    for (let i = 0; i < obj[item].length; i++) {
      x = obj[item][i].toLowerCase();
      transformedObj[x] = Number(item);
    }
  }
  return transformedObj;
}

let newPointStructure = transform(oldPointStructure);

newPointStructure = transform(oldPointStructure);
newPointStructure[' '] = 0;

function runProgram() {
  let response = initialPrompt();
  scorerPrompt(response);
}

//Don't write any code below this line //
//And don't change these or your program will not run as expected //
module.exports = {
  initialPrompt: initialPrompt,
  transform: transform,
  oldPointStructure: oldPointStructure,
  simpleScore: simpleScore,
  vowelBonusScore: vowelBonusScore,
  scrabbleScore: scrabbleScore,
  scoringAlgorithms: scoringAlgorithms,
  newPointStructure: newPointStructure,
  runProgram: runProgram,
  scorerPrompt: scorerPrompt
};
