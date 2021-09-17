let divElem;
function init(){
    divElem=[];
    divElem=document.getElementsByTagName("div");
    for(let i=0;i<divElem.length;i++){
        divElem[i].addEventListener("click",turn);
    }
}
window.onload=init;

function turn(){
    alert("Vänder brickan " + divElem);
}