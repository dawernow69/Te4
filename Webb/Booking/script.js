// JavaScript Document

// Globala variabler
var formElem;		// Referens till elementet med hela formuläret
var totalCostElem;	// Referens till elementet för totalpris
var re;				// Array med reguljära utryck för fälten
var errMsg;			// Array med felmeddelanden

// Initiera globala variabler och koppla funktion till knapp
function init() {
	var i;		// Loopvariabel
	//formElem = document.getElementById("booking");
	formElem = document.querySelector("form");
	totalCostElem = document.getElementById("totalCost");
	for(i=0;i<formElem.roomType.length;i++){
		addListener(formElem.roomType[i],"click",checkIfFamilyRoom);
		addListener(formElem.roomType[i],"click",calculateCost);
	}
	for(i=0;i<formElem.addition.length;i++){
		addListener(formElem.addition[i],"click",calculateCost);
	}
	addListener(formElem.nights,"change",calculateCost);
	checkIfFamilyRoom();
	calculateCost();
	addListener(formElem.city,"blur",checkCity);
	addListener(formElem.zipcode,"blur",checkZipcode);
	addListener(formElem.telephone,"blur",checkTelephone);
	
	re = [
		/^\d{3} ?\d{2}$/,						// Postnummer
		/^0\d{1,3}[-/ ]?\d{5,8}$/,				// Telefonnummer
		/^[A-Za-z]{3}[-]\d{2}[-][A-Za-z]{1}\d{1}$/ //Kampanjkod
	];
	errMsg = [
		"Postnumret måste bestå av fem siffror.",
		"Telnr måste börja med en 0:a och sedan 6-11 siffror."
	];
	
	addListener(formElem.campaigncode,"focus",startCheckCampaign);
	addListener(formElem.campaigncode,"keyup",checkCampaign);
	addListener(formElem.campaigncode,"blur",endCheckCampaign);
	
	formElem.campaigncode.value="";
	totalCostElem.innerHTML="0";
	
} // End init
addListener(window,"load",init);

//Funktion för kontroll om rum är familjerum
function checkIfFamilyRoom(){
	if(formElem.roomType[2].checked == true){
		formElem.persons.disabled=false;
		formElem.persons.parentNode.style.color="#000";
		formElem.addition[2].disabled=true;
		formElem.addition[2].parentNode.style.color="#999";
	}
	else{
		formElem.persons.disabled=true;
		formElem.persons.parentNode.style.color="#999";
		formElem.addition[2].disabled=false;
		formElem.addition[2].parentNode.style.color="#000";
	}
}

//funktion för beräkning av kostnaden
function calculateCost(){
	var i; //loopvariabel
	var elemValue; //för det aktuella fältets värde
	var roomPrice; //rumspriset
	var nightsIndex; //index från valrutan för antal nätter
	var nrOfNights;  //antalet nätter
	
	for(i=0;i<formElem.roomType.length;i++){
		if(formElem.roomType[i].checked==true){
			elemValue=formElem.roomType[i].value;
			roomPrice=Number(elemValue.split(",")[1]);
			break;
		}
	}
	for(i=0;i<formElem.addition.length;i++){
		if(formElem.addition[i].checked && !formElem.addition[i].disabled){
			elemValue=formElem.addition[i].value;
			roomPrice+=Number(elemValue.split(",")[1]);			
		}
	}
	nightsIndex=formElem.nights.selectedIndex;
	nrOfNights=Number(formElem.nights[nightsIndex].value);
	console.log(nrOfNights);
	totalCostElem.innerHTML=nrOfNights*roomPrice;
}

//Funktion för kontroll av ort, omvandlar små bokstäver till stora bokstäver
function checkCity(){
	var city; //variabel för ort
	city=formElem.city.value;
	city=city.toUpperCase();
	formElem.city.value=city;
}

//funktion för kontroll av postnummer
function checkZipcode(){
	checkField(formElem.zipcode,0);
}

//funktion för kontroll av telefonnummer
function checkTelephone(){
	checkField(formElem.telephone,1);
}

//Kiontroll av kampanjkod, ändring av bakgrundsfärg
function startCheckCampaign(){
	this.style.backgroundColor="#F99";
	this.select();
}

//Kontroll av kampanjkod mot reguljärt uttryck
function checkCampaign(){
	var re; //Array för reguljärt uttryck för kampanjen
	re = [
		/^[A-Za-z]{3}[-]\d{2}[-][A-Za-z]{1}\d{1}$/ //Kampanjkod
	];
	
	if(re[0].test(this.value)) this.style.backgroundColor="#6F9"; 
	else this.style.backgroundColor="F99";
}

//Konverterar små bokstäver till stora bokstäver
function endCheckCampaign(){
	var campaignValue; //För värdet i textrutan
	this.style.backgroundColor="";
	campaignValue=formElem.campaigncode.value;
	campaignValue=campaignValue.toUpperCase();
	formElem.campaigncode.value=campaignValue;
}

// Kontrollera innehållet i theField. index används till reguljärt uttryck och felmeddelande.
function checkField(theField,index) {
	var errMsgElem; // Referens till andra span-elementet
	errMsgElem = theField.parentNode.parentNode.getElementsByTagName("span")[1];
	errMsgElem.innerHTML = "";
	if (!re[index].test(theField.value)) {
		errMsgElem.innerHTML = errMsg[index];
		return false;
	}
	else return true;
} // checkField