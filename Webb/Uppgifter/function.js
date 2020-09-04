/*function sum(min,max){
    let summa=0;
    for(let i=min;i<max;i++){
        summa+=i; 
    }
    return summa;
}

let minst = Number(prompt("Ange minsta tal: "));
let stor = Number(prompt("Ange största talet"));

let res = sum(minst,stor);
alert(res);
document.write(sum(minst,stor));
*/

function click(){
    alert("hej");
}

let myButton = document.getElementById("knapp");
myButton.onclick = click;