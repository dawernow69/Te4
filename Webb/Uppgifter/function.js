function sum(min,max){
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




/*let myForm;
let res;
let myButton;

function init(){
    myForm = document.querySelector("form");
    res = document.getElementById("res");
    myButton = document.getElementById("knapp");
    myButton.addEventListener("click",event =>{
        let myText=myForm.elements.text.value;
        if(palindrome(myText)){
            res.style.color = "green";
            res.style.fontSize = "X-large";
            res.innerHTML = "Palindrom";
        }else{
            res.style.color = "red";
            res.style.fontSize = "small";
            res.innerHTML = "Inte ett palindrom";
        }
        event.preventDefault();
    });
}
window.onload = init;*/

/*function click(){    
    let myText=myForm.elements.text.value;
    if(palindrome(myText)){
        res.innerHTML = "Palindrom";
    }else{
        res.innerHTML = "Inte ett palindrom";
    }
    //alert("klar?");
}*/


//myButton.onclick = click;

/*function palindrome(str) {
    //let re = /[\W_0-9]/g;
    let re = /[^a-zåäö]/g;
    let lowRegStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  /*if(palindrome()){
    document.getElementById("res").innerHTML = "Palindrom";
  }else{
    document.getElementById("res").innerHTML = "Inte ett palindrom";
  }*/

 //"A man, a plan, a canal. Panama"