let i;
let paragraph;
let section;
let text;

let myJSON = '{"name":"Tim Tuvestam","age":28}';
let myObj = JSON.parse(myJSON);

function init(){    
    document.getElementById("btn").onclick = stycke;
    start();
}
window.onload = init;

function stycke(){
    text = document.createTextNode("stycke");
    paragraph = document.createElement("p");
    paragraph.appendChild(text);
    document.getElementById("text").appendChild(paragraph);
}

function sections(){
    section = document.createElement("section");
    section.setAttribute("id","newSection");
    document.getElementById("main").appendChild(section);
    text = document.createTextNode(myObj.name);
    paragraph = document.createElement("p");    
    paragraph.appendChild(text);
    document.getElementById("newSection").appendChild(paragraph)
    text = document.createTextNode(myObj.age);
    paragraph = document.createElement("p");    
    paragraph.appendChild(text);
    document.getElementById("newSection").appendChild(paragraph)
}

function start(){
    for(i=0;i<2;i++){
        stycke();
    }

    sections();
}

