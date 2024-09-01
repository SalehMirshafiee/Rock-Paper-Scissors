const cumputerRandom = () => {
  const random = Math.floor(Math.random() * (2 + 1));

  let randomChoise = "";
  switch (random) {
    case 0:
      randomChoise = "rock";
      break;
    case 1:
      randomChoise = "paper";
      break;
    case 2:
      randomChoise = "scissor";
      break;
  }
  //
  return randomChoise;
};

const playerChose = () => {
  let playerChoise = prompt("Rock - Paper - Scissor")?.toLowerCase();
  if (
    !playerChoise ||
    (playerChoise !== "rock" &&
      playerChoise !== "paper" &&
      playerChoise !== "scissor")
  ) {
    console.log("you'r cheated!");
    playerChose();
  } else {
    // console.log(`your choise : ${playerChoise}`);
    return playerChoise;
  }
};

const selectWinner = (cumputer, player) => {
  let text = "";

  if (cumputer === player) {
    text = "Draw!";
    return text;
  } else if (
    (player === "rock" && cumputer === "paper") ||
    (player === "paper" && cumputer === "scissor") ||
    (player === "paper" && cumputer === "rock")
  ) {
    text = "cumputer win!";
    return text;
  } else if (
    (player === "rock" && cumputer === "scissor") ||
    (player === "scissor" && cumputer === "paper") ||
    (player === "paper" && cumputer === "rock")
  )
    text = "player win!";
  return text;
};

function cumputerCounter() {
  let cumputerPoints = 0;
  return function () {
    return cumputerPoints++;
  };
}
const countC = cumputerCounter();


function playerCounter() {
  let playerPoints = 0;
  return function () {
    return playerPoints++;
  };
}
const countP = playerCounter();



const play = () => {
  const roundCount = prompt("enter count of rounds");
  for (let i = 0; i < roundCount; i++) {
    const cumputer = cumputerRandom();
    const player = playerChose();
    const winner = selectWinner(cumputer, player);

    console.log(`cumputer choise : ${cumputer}`);
    console.log(`player choise : ${player}`);
    console.log(winner);
    switch (winner) {
      case "Draw!":
        console.log(`cumputer scoure: ${scoreC}`);
        console.log(`player scoure: ${scoreP}`);
        break;
      case "cumputer won!":
        let scoreC = countC();
        console.log(`cumputer scoure: ${scoreC}`);
        break;
      case "You won!":
        let scoreP = countP();
        console.log(`player scoure: ${scoreP}`);
        break;
    }
    console.log("-------------------");
  }
};

play();
