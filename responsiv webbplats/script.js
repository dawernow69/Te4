let click;
let images = [
    {"imageID":1,src:"./img/bild1.png",date:"2021-09-14",title:"En bild",user:"Tim Tuvestam",fame:4,shame:2},
    {"imageID":2,src:"./img/bild2.png",date:"2021-09-14",title:"En annan bild",user:"Tim Tuvestam",fame:3,shame:8},
    {"imageID":3,src:"./img/bild3.png",date:"2021-09-14",title:"Ytterligare en bild",user:"David Wernow",fame:9,shame:5},
    {"imageID":4,src:"./img/bild4.png",date:"2021-09-14",title:"En sista bild",user:"David Wernow",fame:8,shame:7},
    {"imageID":1,src:"./img/bild1.png",date:"2021-09-14",title:"En bild",user:"Tim Tuvestam",fame:1,shame:9},
    {"imageID":2,src:"./img/bild2.png",date:"2021-09-14",title:"En annan bild",user:"Tim Tuvestam",fame:2,shame:4},
    {"imageID":3,src:"./img/bild3.png",date:"2021-09-14",title:"Ytterligare en bild",user:"David Wernow",fame:5,shame:5},
    {"imageID":4,src:"./img/bild4.png",date:"2021-09-14",title:"En sista bild",user:"David Wernow",fame:9,shame:0}
]


function init(){
    click = document.getElementById("klicka");
    let counter=0;
    let len = images.length;
    //funktion för att hämta JSON objekt
    
    images.forEach(element => {
        counter++;
        createArticle(counter);
       
    });
    /*counter = 0;
    const buttons = document.querySelectorAll("#fame button");

    for (const button of buttons){
        button.addEventListener("click",event=>{
            klicka(counter);
            event.preventDefault();
        });
        counter++;
    }*/

    /*click.addEventListener("click",event=>{
        klicka();
        event.preventDefault();       
    });*/
}
window.onload = init;

function klicka(counter){
    console.log(images[counter-1].title);
}
/**
 * @param  {} counter
 */
function createArticle(counter){
    let article = document.createElement("article");
    let articleId = "a"+counter;
    article.id = articleId;
    click.appendChild(article);
    createFigure(counter, articleId);
    createProgressBar(counter,articleId);
    createFameButton(counter,articleId);
    createShameButton(counter,articleId);
    let fame = document.getElementById("fame"+counter);
    let shame = document.getElementById("shame"+counter);
    /*article.addEventListener("click",event=>{
        klicka(articleId);
        event.preventDefault();
    });*/
    fame.addEventListener("click",event=>{
        klicka(counter);
        event.preventDefault();
    });
    shame.addEventListener("click",event=>{
        klicka(counter);
        event.preventDefault();
    });
}
/**
 * 
 * @param  {} counter
 * @param  {} figureId
 */
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
    button.className = "fame";
    button.id = "fame" + counter;
    
    article.appendChild(button);
}

function createShameButton(counter, articleId){
    let article = document.getElementById(articleId);
    let button = document.createElement("button");
    button.innerHTML = "Shame";
    button.id = "shame" + counter;
    button.className = "shame";
    article.appendChild(button);
}

function createProgressBar(counter, articleId){
    let article = document.getElementById(articleId);
    let progress = document.createElement("progress");
    let min = images[counter-1].fame;
    let max = images[counter-1].fame + images[counter-1].shame;
    console.log(min + " " + max);
    progress.max = max;
    progress.value = min;
    article.appendChild(progress);
}