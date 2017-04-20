$(document).ready(function() {
function loadGame() {
	gameStart = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
	$(".gameArea").html(gameStart);
}
loadGame();

$("body").on("click", ".start-button", function(event){
	event.preventDefault();
	buttonSound.play();
	loadQuestions();
	timerWrapper();
});

$("body").on("click", ".answer", function(event){
	buttonSound.play();
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctA[questionNumber]) {
		clearInterval(timeClock);
		youWin();
	}
	else {
		clearInterval(timeClock);
		youLose();
	}
});

$("body").on("click", ".reset-button", function(event){
	buttonSound.play();
	resetGame();
});

});

function timeUp() {
	numberUnanswered++;
	gameText = "<p class='text-center clock'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctA[questionNumber] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".gameArea").html(gameText);
	setTimeout(wait, 4000);
}

function youWin() {
	numberRight++;
	gameText = "<p class='text-center clock'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctA[questionNumber] + "</p>" + iArray[questionNumber];
	$(".gameArea").html(gameText);
	setTimeout(wait, 4000);
}

function youLose() {
	numberWrong++;
	gameText = "<p class='text-center clock'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctA[questionNumber] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".gameArea").html(gameText);
	setTimeout(wait, 4000);
}

function loadQuestions() {
	gameText = "<p class='text-center clock'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + qArray[questionNumber] + "</p><p class='first-answer answer'>A. " + aArray[questionNumber][0] + "</p><p class='answer'>B. "+aArray[questionNumber][1]+"</p><p class='answer'>C. "+aArray[questionNumber][2]+"</p><p class='answer'>D. "+aArray[questionNumber][3]+"</p>";
	$(".gameArea").html(gameText);
}

function wait() {
	if (questionNumber < 7) {
	questionNumber++;
	loadQuestions();
	counter = 30;
	timerWrapper();
	}
	else {
		gameEnding();
	}
}

function timerWrapper() {
	timeClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(timeClock);
			timeUp();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function gameEnding() {
	gameText = "<p class='text-center clock'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>All done, here's how you did!" + "</p>" + "<p class='end-stats'>Correct Answers: " + numberRight + "</p>" + "<p>Wrong Answers: " + numberWrong + "</p>" + "<p>Unanswered: " + numberUnanswered + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Reset The Quiz!</a></p>";
	$(".gameArea").html(gameText);
}

function resetGame() {
	questionNumber = 0;
	numberRight = 0;
	numberWrong = 0;
	numberUnanswered = 0;
	counter = 30;
	loadQuestions();
	timerWrapper();
}

var questionNumber = 0;
var numberRight = 0;
var numberWrong = 0;
var gameStart;
var gameText;
var counter = 30;
var qArray = ["What year was the first iPod released?", "What band endorsed this special edition iPod?<br><img class='center-block img-right' src='../img/applelogo.jpg'>", "What is the main difference between these two iPods<br><img class='center-block img-right' src='assets/img/ipod1and2.jpg'>", "What is this iPod called?", "How many iPods have been sold to date?", "What is this iPod called?", "How many gigabytes does the latest iPod hold?", "What was special about the 5th generation iPod"];
var aArray = [["1998", "2001", "2004", "1996"], ["Green Day","John Mayer","U2","Coldplay"], ["One has a touch wheel and the other a click wheel.", "One plays mp3 files and the other only plays wav", "They were prototypes but never released", "One has a color screen"], ["Kyoto","Hiroshima","Tokyo","Osaka"], ["Hong Kong", "Macau", "Shanghai", "Beijing"], ["Ankara","Istanbul","Antalya","Bursa"], ["Medellin", "Bogota", "Cartagena", "Cali"], ["Mumbai","Hyderabad","Bangalore","New Delhi"]];
var iArray = ["<img class='center-block img-right' src='../img/applelogo.jpg'>", "<img class='center-block img-right' src='../img/applelogo.jpg'>", "<img class='center-block img-right' src='../img/applelogo.jpg'>", "<img class='center-block img-right' src='../img/applelogo.jpg'>", "<img class='center-block img-right' src='../img/applelogo.jpg'>", "<img class='center-block img-right' src='../img/applelogo.jpg'>", "<img class='center-block img-right' src='../img/applelogo.jpg'>", "<img class='center-block img-right' src='../img/applelogo.jpg'>"];
var correctA = ["B. 2001", "C. U2", "C. Taipei", "C. Tokyo", "D. Beijing", "A. Ankara", "B. Bogota", "D. New Delhi"];
var selecterAnswer;
var timeClock;
var numberUnanswered = 0;
var musicSound = new Audio("assets/sound/music.mp3");
var buttonSound = new Audio("assets/sound/button.mp3");
