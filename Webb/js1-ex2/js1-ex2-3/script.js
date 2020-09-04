// JavaScript
/* ----- Exempel 2-3 ----- */

// Deklaration av variabler
var nr1, nr2, result;
var str;

str = "Java" + "Script";
alert(str);

str = str + " är kul";
alert(str);

nr1 = 12;
nr2 = 34;

result = "Talen är " + nr1 + " och " + nr2;
alert(result);

result = nr1 + nr2;
alert(result);

nr2 = "34";
result = nr1 + nr2;
alert(result);

nr2 = prompt("Ange ett tal:");
result = nr1 + nr2;
alert(result);

result = nr1 + Number(nr2);
alert(result);

alert(nr1);
nr1++;
alert(nr1);
nr1 += 5;
alert(nr1);
