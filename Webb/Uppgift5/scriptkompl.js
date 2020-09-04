// JavaScript

// Globala variabler
let inputElem;
let msgElem;
let fruitNames;
let fruitNr;
let selFruitsElem;

// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd.
// Initiering av globala variabler samt koppling avfunktioner till knapparna.
function init() {
	
	inputElem=[];
	inputElem[1]=document.getElementById("input1");
	inputElem[2]=document.getElementById("input2");
	inputElem[3]=document.getElementById("input3");
	
	fruitNames=["ingen frukt","äpple","banan","citron","apelsin","päron"];
	fruitNr=0;
	
	msgElem=document.getElementById("message");
	selFruitsElem=document.getElementById("selectedFruits");
	document.getElementById("btn1").onclick = showFruit;
	document.getElementById("btn2").onclick = checkName;
	document.getElementById("btn3").onclick = addFruits;
} // End init
window.onload = init; // Se till att init aktiveras då sidan är inladdad

function showFruit(){
	let nr;
	let fruitUrl;
	
	nr = getNr(1,5);
	
	if(nr!==null){
		fruitUrl = "./pics/fruit"+nr+".jpg";
		document.getElementById("fruitImg").src=fruitUrl;
		fruitNr = nr;
	}
}

function checkName(){
	let name;
	
	if(fruitNr === 0){
		msgElem.innerHTML="Du måste välja en frukt";
		return;
	}
	
	name = inputElem[2].value;
	if(name === fruitNames[fruitNr]){
		msgElem.innerHTML = "Rätt namn";
	}else{
		msgElem.innerHTML = "Fel namn";
	}
}

function getNr(elemNr, high){
	let nr;
	nr = Number(inputElem[elemNr].value);
	
	if(isNaN(nr)){
		msgElem.innerHTML="Du måste skriva ett tal med siffror.";
		return null;
	}
	
	if(nr < 1 || nr > high){
		msgElem.innerHTML="Tal mellan 1 och 5.";
		return null;
	}
	
	nr=parseInt(nr);
	inputElem[elemNr].value = nr;
	
	return nr;
}

function addFruits(){
	let amount;
	let imgList;
	let i;
	
	if(fruitNr === 0){
		msgElem.innerHTML="Du måste välja en frukt";
		return;
	}
	
	amount = getNr(3,9);

	if(amount!==null){
		imgList="";
		for(i=0;i<amount;i++){
			imgList+="<img src='./pics/fruit" + fruitNr + ".jpg' alt='frukt'>";
		}
		selFruitsElem.innerHTML+=imgList;
	}
}