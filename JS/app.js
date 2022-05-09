const score = document.querySelector("[data-score]");
const rock = document.querySelector("[data-rock]");
const paper = document.querySelector("[data-paper]");
const scissors = document.querySelector("[data-scissors]");
const spock = document.querySelector("[data-spocks]");
const lizard = document.querySelector("[data-lizard]");
const rules = document.querySelector("[data-rules]");
const closeBtn = document.querySelector("[data-close]");
const inputdivider = document.querySelector(".main div");
const result = document.querySelector("[data-resultdiv]");
const pentagon = document.querySelector("[data-pentagon]");
const lizardStyle = window.getComputedStyle(lizard);
const spockStyle = window.getComputedStyle(spock);
const paperStyle = window.getComputedStyle(paper);
const rockStyle = window.getComputedStyle(rock);
const scissorsStyle = window.getComputedStyle(scissors);

let scorecounter = 0;

const ResultObject = {
  rock: {
    beats: ["lizard", "scissors"],
  },
  paper: {
    beats: ["rock", "spock"],
  },
  scissors: {
    beats: ["lizard", "paper"],
  },
  lizard: {
    beats: ["spock", "paper"],
  },
  spock: {
    beats: ["scissors", "rock"],
  },
};
window.onload = () => {
  score.innerText = scorecounter;
};

rules.addEventListener("click", () => {
  document.querySelector(".rules-container").classList.toggle("hidden");
});
closeBtn.addEventListener("click", () => {
  document.querySelector(".rules-container").classList.toggle("hidden");
});
let computerInput, userInput;

let itemsArr = [rock, paper, scissors, spock, lizard];

itemsArr.forEach((elem, index, arr) => {
  elem.addEventListener("click", (e) => {
    userInput = elem.id;

    Array.from(elem.parentElement.children).forEach((elements) => {
      elements.style.display = "none";
    });
    elem.style.removeProperty("display");
    elem.style.top = "25.2%";
    elem.style.left = "33.7%";

    computerInput = getComputerInput();
    while (computerInput == userInput) {
      computerInput = getComputerInput();
    }

    let tempInput = document.getElementById(computerInput);
    console.log;
    tempInput.style.removeProperty("display");
    tempInput.style.removeProperty("top");
    tempInput.style.removeProperty("bottom");
    tempInput.style.removeProperty("left");
    tempInput.style.removeProperty("right");

    tempInput.style.top = "25.2%";
    tempInput.style.right = "33.7%";

    tempInput.style.left = "unset";
    tempInput.style.bottom = "unset";
    inputdivider.classList.toggle("hidden");
    computeResult();
  });
});

function getComputerInput() {
  let elem = itemsArr[Math.floor(Math.random() * 6)];
  return elem ? elem.id : getComputerInput();
}

function computeResult() {
  if (ResultObject[userInput].beats.includes(computerInput)) {
    scorecounter++;
    console.log("user wins");
    score.innerText = scorecounter;
    result.classList.toggle("hidden");
    document.querySelector("[data-resultdiv] h2").innerText = `YOU WON`;
  } else {
    result.classList.toggle("hidden");
    console.log("Computer Wins");
    document.querySelector("[data-resultdiv] h2").innerText = `YOU LOSE`;
  }
}

function Reset(e) {
  e.preventDefault();
  result.classList.toggle("hidden");
  Array.from(pentagon.children).forEach((elements) => {
    elements.style.removeProperty("display");

    for (prop in getComputedStyle(elements)) {
      switch (elements.id) {
        case "rock":
          elements.style[prop] = rockStyle[prop];
          break;

        case "paper":
          elements.style[prop] = paperStyle[prop];
          break;

        case "scissors":
          elements.style[prop] = scissorsStyle[prop];
          break;

        case "spock":
          elements.style[prop] = spockStyle[prop];
          break;

        case "lizard":
          elements.style[prop] = lizardStyle[prop];
          break;
      }
    }
  });
  inputdivider.classList.toggle("hidden");
}
