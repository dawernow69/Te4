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

	nr1 = input1Elem.value;
	nr2 = input2Elem.value;
	res = nr1 * nr2;
	resultElem.innerHTML = res;
} // End testScript