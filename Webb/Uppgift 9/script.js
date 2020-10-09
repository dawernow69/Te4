// JavaScript

// Globala variabler
let wordList;
let selectedWord;
let letterBoxes;
let hangmanImg;
let hangmanImgNr;
let msgElem;

// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd
// Initiering av globala variabler samt koppling av funktioner till knapparna.
function init() {
	let i;
	let startGameBtn;
	let letterButtons;

	wordList = ["BLOMMA","LASTBIL","SOPTUNNA","KÖKSBORD","RADIOAPPARAT","VINTER","SOMMAR","DATORMUS","LEJON","ELEFANTÖRA","JULTOMTE",
				"SKOGSHYDDA","BILNUMMER","BLYERTSPENNA","SUDDGUMMI","KLÄDSKÅP","VEDSPIS","LJUSSTAKE","SKRIVBORD","ELDGAFFEL","STEKPANNA",
				"KASTRULL","KAFFEBRYGGARE","TALLRIK","SOFFBORD","TRASMATTA","FLYGPLAN","FLYGPLATS","TANGENTBORD"];

	startGameBtn = document.getElementById("startGameBtn");
	startGameBtn.onclick = startGame;
	
	letterButtons = document.getElementById("letterButtons").getElementsByTagName("button");
	for(i=0;i<letterButtons.length;i++) letterButtons[i].onclick = guessLetter;

	hangmanImg = document.getElementById("hangman");
	msgElem = document.getElementById("message");
	
} // End init
window.onload = init; // Se till att init aktiveras då sidan är inladdad

function startGame(){
	randomWord();
	showLetterBoxes();
	hangmanImg.src = "./pics/h0.png";
	hangmanImgNr = 0;
}

function randomWord(){
	let wordIndex;
	wordIndex = Math.floor(Math.random()*wordList.length);
	selectedWord = wordList[wordIndex];
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

	letter = this.value;

	for(i=0;i<selectedWord.length;i++){
		if(letter === selectedWord.charAt(i)){
			letterBoxes[i].innerHTML = letter;
			letterFound=true;
		}
	}
	if(!letterFound){
		hangmanImgNr++;
		hangmanImg.src = "./pics/h" + hangmanImgNr + ".png";
		if(hangmanImgNr == 6){
			endGame(true);
		}
	}
}

function endGame(manHanged){

}