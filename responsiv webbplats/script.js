let click;
let images = [
    {"imageID":1,src:"./img/bild1.png",date:"2021-09-14",title:"En bild",user:"Tim Tuvestam"},
    {"imageID":2,src:"./img/bild2.png",date:"2021-09-14",title:"En annan bild",user:"Tim Tuvestam"},
    {"imageID":3,src:"./img/bild3.png",date:"2021-09-14",title:"Ytterligare en bild",user:"David Wernow"},
    {"imageID":4,src:"./img/bild4.png",date:"2021-09-14",title:"En sista bild",user:"David Wernow"}
]


function init(){
    click = document.getElementById("klicka");
    let counter=0;
    let len = images.length;
    console.log(len);

    images.forEach(element => {
        counter++;
        createSection(counter);
    });

    click.addEventListener("click",event=>{
        klicka();
        event.preventDefault();       
    });
}
window.onload = init;

function klicka(){
    console.log("hej");
}

function createSection(counter){
    let section = document.createElement("section");
    let sectionClass = "s"+counter;
    console.log(counter,sectionClass);
    section.id = sectionClass;
    click.appendChild(section);
    createFigure(counter, sectionClass);

}

function createImage(counter, figureClass){
    let img = document.createElement("img");
    let figure = document.getElementById(figureClass);
    console.log(counter,figureClass, figure);
    let figCaption = document.createElement("figcaption");
   
  
    img.src = images[counter-1].src;
    text = images[counter-1].user + " " + images[counter-1].title;
    figCaption.innerHTML = text;
    
    figure.appendChild(img);
    figure.appendChild(figCaption);

}

function createFigure(counter, sectionClass){
    let figure = document.createElement("figure");
    
    let text; 
    let section = document.getElementById(sectionClass);
    let figureClass = "f"+counter;
    figure.id = figureClass;
    console.log(counter,figureClass);
    
    section.appendChild(figure);
    createImage(counter, figureClass);


}
