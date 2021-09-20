let click;
let images = [
    {"imageID":1,src:"./img/bild1.png",date:"2021-09-14",title:"En bild",user:"Tim Tuvestam"},
    {"imageID":2,src:"./img/bild2.png",date:"2021-09-14",title:"En annan bild",user:"Tim Tuvestam"},
    {"imageID":3,src:"./img/bild3.png",date:"2021-09-14",title:"Ytterligare en bild",user:"David Wernow"},
    {"imageID":4,src:"./img/bild4.png",date:"2021-09-14",title:"En sista bild",user:"David Wernow"},
    {"imageID":1,src:"./img/bild1.png",date:"2021-09-14",title:"En bild",user:"Tim Tuvestam"},
    {"imageID":2,src:"./img/bild2.png",date:"2021-09-14",title:"En annan bild",user:"Tim Tuvestam"},
    {"imageID":3,src:"./img/bild3.png",date:"2021-09-14",title:"Ytterligare en bild",user:"David Wernow"},
    {"imageID":4,src:"./img/bild4.png",date:"2021-09-14",title:"En sista bild",user:"David Wernow"}
]


function init(){
    click = document.getElementById("klicka");
    let counter=0;
    let len = images.length;

    images.forEach(element => {
        counter++;
        createArticle(counter);
       
    });

    /*click.addEventListener("click",event=>{
        klicka();
        event.preventDefault();       
    });*/
}
window.onload = init;

function klicka(article){
    console.log(article);
}

function createArticle(counter){
    let article = document.createElement("article");
    let articleId = "a"+counter;
    article.id = articleId;
    click.appendChild(article);
    createFigure(counter, articleId);
    createFameButton(counter,articleId);
    //createShameButton();
    let fame = document.getElementById("fame"+counter);
    //let shame = document.getElementById("shame");
    /*article.addEventListener("click",event=>{
        klicka(articleId);
        event.preventDefault();
    });*/
    fame.addEventListener("click",event=>{
        klicka("fame "+ articleId);
        event.preventDefault();
    });
    /*shame.addEventListener("click",event=>{
        klicka(articleId);
        event.preventDefault();
    });*/
}

function createImage(counter, figureId){
    let img = document.createElement("img");
    let figure = document.getElementById(figureId);
    let figCaption = document.createElement("figcaption");
   
  
    img.src = images[counter-1].src;
    text = images[counter-1].user + "      " + images[counter-1].title;
    figCaption.innerHTML = text;
    
    figure.appendChild(img);
    figure.appendChild(figCaption);

}

function createFigure(counter, articleId){
    let figure = document.createElement("figure");
    
    let text; 
    let article = document.getElementById(articleId);
    let figureId = "f"+counter;
    figure.id = figureId;
    
    article.appendChild(figure);
    createImage(counter, figureId);
}

function createFameButton(counter, articleId){
    let article = document.getElementById(articleId);
    let button = document.createElement("button");
    button.innerHTML = "Fame";
    button.id = "fame" + counter;
    article.appendChild(button);
}
