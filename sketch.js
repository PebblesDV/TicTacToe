//info to call in later on in the code
const cellWidth = 100;
const cellHeight = 100;

let cell1Color = "white";
let cell2Color = "white";
let cell3Color = "white";
let cell4Color = "white";
let cell5Color = "white";
let cell6Color = "white";
let cell7Color = "white";
let cell8Color = "white";
let cell9Color = "white";

let player1 = "blue";
let player2 = "red";
let player1Color = "blue";
let player2Color = "red";
let playerTurn = "";
let gameStatus = "";
let button;

let startTime;
let timerDuration = 30000;
let timerActive = false;

//checking who won and what tiles they filled to win
function checkBoard(player) {
  if (cell1Color == player && cell2Color == player && cell3Color == player) {
    return true;
  }

  if (cell4Color == player && cell5Color == player && cell6Color == player) {
    return true;
  }

  if (cell7Color == player && cell8Color == player && cell9Color == player) {
    return true;
  }

  if (cell1Color == player && cell4Color == player && cell7Color == player) {
    return true;
  }

  if (cell2Color == player && cell5Color == player && cell8Color == player) {
    return true;
  }

  if (cell3Color == player && cell6Color == player && cell9Color == player) {
    return true;
  }

  if (cell1Color == player && cell5Color == player && cell9Color == player) {
    return true;
  }

  if (cell3Color == player && cell5Color == player && cell7Color == player) {
    return true;
  }

  return false;
}

//checking if the every tile is filled with a color and if noone won
function checkIfBoardIsFull() {
  if (cell1Color === "white") {
    return false;
  }

  if (cell2Color === "white") {
    return false;
  }

  if (cell3Color === "white") {
    return false;
  }

  if (cell4Color === "white") {
    return false;
  }

  if (cell5Color === "white") {
    return false;
  }

  if (cell6Color === "white") {
    return false;
  }

  if (cell7Color === "white") {
    return false;
  }

  if (cell8Color === "white") {
    return false;
  }

  if (cell9Color === "white") {
    return false;
  }

  return true;
}

//showing a certain message when a player won
function checkWin() {
  let didPlayer1Win = checkBoard(player1);
  let didPlayer2Win = checkBoard(player2);

  if (didPlayer1Win) {
    noStroke();
    textSize(30);
    fill("white");
    text(player1 + " won the game!", 270, 150);
    gameStatus = "finished";
  }

  if (didPlayer2Win) {
    noStroke();
    textSize(30);
    fill("white");
    text(player2 + " won the game!", 270, 150);
    gameStatus = "finished";
  }

  //showing a cerain message when it's a tie
  let isBoardFull = checkIfBoardIsFull();

  if (isBoardFull) {
    noStroke();
    textSize(30);
    fill("white");
    text("it's a tie!", 350, 150);
    gameStatus = "finished";
  }
}

//the player that starts is chosen
function chooseStartingPlayer() {
  if (playerTurn && playerTurn !== "") {
    return;
  }
  playerTurn = random([player1, player2]);
  gameStatus = "playing";
}

function setup() {
  createCanvas(800, 600);

  //button for chooseStartingPlayer
  button = createButton("Choose player");
  button.position(350, 80);
  button.mousePressed(chooseStartingPlayer);
}

function draw() {
  background(80, 80, 80);

  if (timerActive) {
    let elapsedTime = millis() - startTime;
  }

  //all text
  textSize(20);
  noStroke();
  fill("white");
  text("Player 1 =", 80, 70);
  fill("white");
  text("Player 2 =", 80, 100);
  fill("blue");
  text("blue", 180, 70);
  fill("red");
  text("red", 180, 100);

  //top row cells left to right
  noStroke();
  fill(cell1Color);
  cell1 = rect(250, 170, cellWidth, cellHeight);
  fill(cell2Color);
  cell2 = rect(350, 170, cellWidth, cellHeight);
  fill(cell3Color);
  cell3 = rect(450, 170, cellWidth, cellHeight);

  //middle row cells left to right
  noStroke();
  fill(cell4Color);
  cell4 = rect(250, 270, cellWidth, cellHeight);
  fill(cell5Color);
  cell5 = rect(350, 270, cellWidth, cellHeight);
  fill(cell6Color);
  cell6 = rect(450, 270, cellWidth, cellHeight);

  //bottom row cells left to right
  noStroke();
  fill(cell7Color);
  cell7 = rect(250, 370, cellWidth, cellHeight);
  fill(cell8Color);
  cell8 = rect(350, 370, cellWidth, cellHeight);
  fill(cell9Color);
  cell9 = rect(450, 370, cellWidth, cellHeight);

  //lines to seprate squares
  strokeWeight(8);
  stroke("black");
  line(350, 170, 350, 470);
  line(450, 170, 450, 470);
  line(250, 270, 550, 270);
  line(250, 370, 550, 370);

  //shows which players turn it is at that moment
  if (playerTurn && playerTurn !== "") {
    noStroke();
    textSize;
    fill(playerTurn);
    text(playerTurn, 180, 200);
  }

  checkWin();
}

//switches between 2 players every turn
function switchPlayerTurn() {
  if (!playerTurn) {
    return;
  }

  if (playerTurn === player1) {
    playerTurn = player2;
  } else {
    playerTurn = player1;
  }
}

//makes the square change to the players color when clicked
function mouseClicked() {
  if (gameStatus === "finished") {
    return;
  }

  if (mouseX > 250 && mouseX < 350 && mouseY > 170 && mouseY < 270) {
    if (cell1Color == "white") {
      cell1Color = playerTurn;
      switchPlayerTurn();
    }
  }

  if (mouseX > 350 && mouseX < 450 && mouseY > 170 && mouseY < 270) {
    if (cell2Color == "white") {
      cell2Color = playerTurn;
      switchPlayerTurn();
    }
  }

  if (mouseX > 450 && mouseX < 550 && mouseY > 170 && mouseY < 270) {
    if (cell3Color == "white") {
      cell3Color = playerTurn;
      switchPlayerTurn();
    }
  }

  if (mouseX > 250 && mouseX < 350 && mouseY > 270 && mouseY < 370) {
    if (cell4Color == "white") {
      cell4Color = playerTurn;
      switchPlayerTurn();
    }
  }

  if (mouseX > 350 && mouseX < 450 && mouseY > 270 && mouseY < 370) {
    if (cell5Color == "white") {
      cell5Color = playerTurn;
      switchPlayerTurn();
    }
  }

  if (mouseX > 450 && mouseX < 550 && mouseY > 270 && mouseY < 370) {
    if (cell6Color == "white") {
      cell6Color = playerTurn;
      switchPlayerTurn();
    }
  }

  if (mouseX > 250 && mouseX < 350 && mouseY > 370 && mouseY < 470) {
    if (cell7Color == "white") {
      cell7Color = playerTurn;
      switchPlayerTurn();
    }
  }

  if (mouseX > 350 && mouseX < 450 && mouseY > 370 && mouseY < 470) {
    if (cell8Color == "white") {
      cell8Color = playerTurn;
      switchPlayerTurn();
    }
  }

  if (mouseX > 450 && mouseX < 550 && mouseY > 370 && mouseY < 470) {
    if (cell9Color == "white") {
      cell9Color = playerTurn;
      switchPlayerTurn();
    }
  }
}
