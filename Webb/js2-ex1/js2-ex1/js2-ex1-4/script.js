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
	var nr1, nr2;
	var text1, text2;
	
	nr1 = 5;
	nr2 = "5";
	
	if (nr1 == nr2) resultElem.innerHTML = "Talen är lika";
	else resultElem.innerHTML = "Talen är ej lika";
	
	if (nr1 === nr2) resultElem.innerHTML += "<br>Talen är lika";
	else resultElem.innerHTML += "<br>Talen är ej lika";
	
	resultElem.innerHTML += "<br>"
	
	// ---- Textsträngar -----
	
	text1 = "Cykel";
	
	if (text1 == "Cykel") resultElem.innerHTML += "<br>Lika med 'Cykel'";
	else resultElem.innerHTML += "<br>Ej lika med 'Cykel'";
	
	if (text1 == "cykel") resultElem.innerHTML += "<br>Lika med 'cykel'";
	else resultElem.innerHTML += "<br>Ej lika med 'cykel'";
	
	if (text1 > "Bil") resultElem.innerHTML += "<br>" + text1 + " kommer efter 'Bil'";
	else resultElem.innerHTML += "<br>" + text1 + " kommer före 'Bil'";
	
	if (text1 > "bil") resultElem.innerHTML += "<br>" + text1 + " kommer efter 'bil'";
	else resultElem.innerHTML += "<br>" + text1 + " kommer före 'bil'";
	
	if ("å" < "ä") resultElem.innerHTML += "<br>å < ä";
	else resultElem.innerHTML += "<br>å > ä";
	if ("ä" < "ö") resultElem.innerHTML += "<br>ä < ö";
	else resultElem.innerHTML += "<br>ä > ö";
	
} // End testScript
