// JavaScript

// Globala variabler
let wordList;
let selectedWord;
let letterBoxes;
let hangmanImg;
let hangmanImgNr;
let msgElem;
let letterButtons;
let startGameBtn;
let startTime;

// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd
// Initiering av globala variabler samt koppling av funktioner till knapparna.
function init() {
	let i;
	selectedWord="";

	wordList = ["BLOMMA","LASTBIL","SOPTUNNA","KÖKSBORD","RADIOAPPARAT","VINTER","SOMMAR","DATORMUS","LEJON","ELEFANTÖRA","JULTOMTE",
				"SKOGSHYDDA","BILNUMMER","BLYERTSPENNA","SUDDGUMMI","KLÄDSKÅP","VEDSPIS","LJUSSTAKE","SKRIVBORD","ELDGAFFEL","STEKPANNA",
				"KASTRULL","KAFFEBRYGGARE","TALLRIK","SOFFBORD","TRASMATTA","FLYGPLAN","FLYGPLATS","TANGENTBORD"];

	startGameBtn = document.getElementById("startGameBtn");
	//startGameBtn.onclick = startGame;
	startGameBtn.addEventListener("click",startGame);
	//startGameBtn.disabled = false;
	
	letterButtons = document.getElementById("letterButtons").getElementsByTagName("button");
	for(i=0;i<letterButtons.length;i++) {
		//letterButtons[i].onclick = guessLetter;
		letterButtons[i].addEventListener("click",guessLetter);
		//letterButtons[i].disabled = true;
	}

	hangmanImg = document.getElementById("hangman");
	msgElem = document.getElementById("message");

	changeButtonActivition(true);
	
} // End init
window.onload = init; // Se till att init aktiveras då sidan är inladdad

function startGame(){
	let now;
	randomWord();
	showLetterBoxes();
	hangmanImg.src = "./pics/h0.png";
	hangmanImgNr = 0;

	//startGameBtn.disabled = true;
	//for(let i=0;i<letterButtons.length;i++) letterButtons[i].disabled = false;

	changeButtonActivition(false);
	msgElem.innerHTML = "";
	now = new Date();
	startTime = now.getTime();
}

function randomWord(){
	let wordIndex;
	let oldWord=selectedWord;
	while(selectedWord == oldWord){
		wordIndex = Math.floor(Math.random()*wordList.length);
		selectedWord = wordList[wordIndex];
	}
}

function showLetterBoxes(){
	let newCode;
	let i;
	newCode = "";
	for(i=0;i<selectedWord.length;i++){
		newCode += "<span>&nbsp;</span>";
	}
	document.getElementById("letterBoxes").innerHTML = newCode;
	letterBoxes = document.getElementById("letterBoxes").getElementsByTagName("span");
}

function guessLetter(){
	let letter;
	let letterFound = false;
	let correctLettersCount;
	correctLettersCount = 0;
	letter = this.value;
	this.disabled = true;
	//letterNumber = letter.charCodeAt(0) - 65;
	//letterButtons[letter.charCodeAt(0) - 65].disabled = true;

	for(i=0;i<selectedWord.length;i++){
		if(letter === selectedWord.charAt(i)){
			letterBoxes[i].innerHTML = letter;
			letterFound=true;
		}
		if(letterBoxes[i].innerHTML != "&nbsp;"){
			correctLettersCount++;
		}
	}
	if(!letterFound){
		hangmanImgNr++;
		hangmanImg.src = "./pics/h" + hangmanImgNr + ".png";
		if(hangmanImgNr == 6){
			endGame(true);
		}
	}else if(correctLettersCount == selectedWord.length){
		endGame(false);
	}
}

function endGame(manHanged){
	let now;
	let runTime;
	now = new Date();
	runTime = (now.getTime() - startTime)/1000;
	if(manHanged){
		msgElem.innerHTML = "Gubben blev hängd<br>Rätt ord var " + selectedWord;
	}else{
		msgElem.innerHTML = "Grattis!<br>Det tog " + runTime.toFixed(1) + " sekunder.";
	}
	//startGameBtn.disabled = false;
	//for(let i=0;i<letterButtons.length;i++) letterButtons[i].disabled = true;
	changeButtonActivition(true);
}

function changeButtonActivition(status){
	if(status){
		startGameBtn.disabled = false;
		for(let i=0;i<letterButtons.length;i++) letterButtons[i].disabled = true;
	}else{
		startGameBtn.disabled = true;
		for(let i=0;i<letterButtons.length;i++) letterButtons[i].disabled = false;
	}
}