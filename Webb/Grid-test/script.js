function init(){
       
    start();
    
   
}
window.onload = init;

function sections(text,index){
    let section = document.createElement("article");
    section.setAttribute("id","newSection" + index);
    document.getElementById("main").appendChild(section);
    let figure = document.createElement("figure");
    figure.setAttribute("id","newFigure" + index);
    document.getElementById("newSection" + index).appendChild(figure);
    let img = document.createElement("img");
    img.setAttribute("src","teknikum.jpg");
    img.setAttribute("alt","bild");
    document.getElementById("newFigure" + index).appendChild(img);
    let figCaption = document.createElement("figcaption");
    document.getElementById("newFigure" + index).appendChild(figCaption);

    text = document.createTextNode(text);
    paragraph = document.createElement("p");    
    paragraph.appendChild(text);
    document.getElementById("newSection"+index).appendChild(paragraph)
    
}

function start(){
    let text="";
    for(i=0;i<5;i++){
        text="Artikel " + (i + 1);
        sections(text, i);
    }
}