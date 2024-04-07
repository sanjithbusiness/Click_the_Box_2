var box = document.getElementById("box");
var score = 0;
var gameTime = 30; // Game duration in seconds
var timerInterval;
var colorChangeInterval;

function moveBox() {
    var gameWidth = document.getElementById("game").offsetWidth;
    var gameHeight = document.getElementById("game").offsetHeight;
    var boxWidth = box.offsetWidth;
    var boxHeight = box.offsetHeight;

    var randomX = Math.floor(Math.random() * (gameWidth - boxWidth));
    var randomY = Math.floor(Math.random() * (gameHeight - boxHeight));

    box.style.left = randomX + "px";
    box.style.top = randomY + "px";
}

function startGame() {
    document.getElementById("start-game").style.display = "none";
    document.getElementById("game-over").style.display = "none";
    score = 0;
    gameTime = 30;
    document.getElementById("score").textContent = score;
    document.getElementById("timer").textContent = "0:30";
    moveBox();
    timerInterval = setInterval(decreaseTime, 1000);
    colorChangeInterval = setInterval(changeColor, 1000);
}

function decreaseTime() {
    gameTime--;
    var minutes = Math.floor(gameTime / 60);
    var seconds = gameTime % 60;
    document.getElementById("timer").textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    if (gameTime <= 0) {
        gameOver();
    }
}

function changeColor() {
    var currentColor = document.getElementById("game").style.backgroundColor;
    var newColor = currentColor === "red" ? "blue" : "red";
    document.getElementById("game").style.backgroundColor = newColor;
}

function gameOver() {
    clearInterval(timerInterval);
    clearInterval(colorChangeInterval);
    document.getElementById("game-over").style.display = "block";
}

document.getElementById("start-game").addEventListener("click", startGame);
document.getElementById("restart").addEventListener("click", startGame);
box.addEventListener("click", function() {
    score++;
    document.getElementById("score").textContent = score;
    moveBox();
  
});

startGame();

