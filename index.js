let homeScore = 0;
let awayScore = 0;

homeScore = parseInt(document.getElementById("h-Score").textContent);
awayScore = parseInt(document.getElementById("a-Score").textContent);

let tHColor = document.getElementById("h-Score");

let tAColor = document.getElementById("a-Score");

function checkWteam() {
  let cHScore = parseInt(document.getElementById("h-Score").textContent);
  let cAScore = parseInt(document.getElementById("a-Score").textContent);

  if (cHScore != cAScore) {
    if (cHScore > cAScore) {
      tHColor.style.color = "green";

      tAColor.style.color = "red";
    } else {
      tAColor.style.color = "green";
      tHColor.style.color = "red";
    }
  } else {
    tAColor.style.color = "orange";
    tHColor.style.color = "orange";
  }
}

function add1() {
  homeScore += 1;
  document.getElementById("h-Score").textContent = homeScore;
  checkWteam();
}

function add2() {
  homeScore += 2;
  document.getElementById("h-Score").textContent = homeScore;
  checkWteam();
}

function add3() {
  homeScore += 3;
  document.getElementById("h-Score").textContent = homeScore;
  checkWteam();
}

function addA1() {
  awayScore += 1;
  document.getElementById("a-Score").textContent = awayScore;
  checkWteam();
}

function addA2() {
  awayScore += 2;
  document.getElementById("a-Score").textContent = awayScore;
  checkWteam();
}

function addA3() {
  awayScore += 3;
  document.getElementById("a-Score").textContent = awayScore;
  checkWteam();
}

function resetGame() {
  document.getElementById("h-Score").textContent = 0;
  document.getElementById("a-Score").textContent = 0;
  tAColor.style.color = "red";
  tHColor.style.color = "red";
}
