// JavaScript

// Variabler med referenser till input-taggarna och div-elementet för resultat
var input1Elem, input2Elem, resultElem;

// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd
// Här tas det fram referenser till textfälten för input och div-elementet för resultat
// Knappen för att köra programmet kopplas till funktionen testScript
function init() {
	input1Elem = document.getElementById("input1");
	input2Elem = document.getElementById("input2");
	resultElem = document.getElementById("result");
	document.getElementById("runBtn").onclick = testScript;
} // End init
window.onload = init; // Se till att init aktiveras då sidan är inladdad


/* ----- Testfunktionen ----- */

// Funktion med den kod som ska testas
function testScript() {
	// Deklaration av variabler
	var nr1, nr2, res;

	nr1 = Number(input1Elem.value);
	nr2 = Number(input2Elem.value);
	
	if (isNaN(nr1) || isNaN(nr2)) {
		resultElem.innerHTML = "Inget tal. Skriv endast siffror i båda fälten.";
		return;
	}
	
	if (nr1 == nr2) resultElem.innerHTML = "Talen är lika.";
	else resultElem.innerHTML = "Talen är ej lika.";
	
	if (nr2 != 0) {
		res = nr1 / nr2;
		resultElem.innerHTML += "<br>Tal 1 delat med tal 2 är " + res;
	}
	
	if (nr1 < 0 && nr2 < 0)
		resultElem.innerHTML += "<br>Båda talen är negativa.";
	
} // End testScript