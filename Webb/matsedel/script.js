let dishes = [
    {date:"2021-11-18", dish:"Måndag rätt 1"},
    //{date:"2021-11-18", dish:"Måndag rätt 2"},
    {date:"2021-12-19", dish:"Tisdag rätt 1"},
    {date:"2021-12-19", dish:"Tisdag rätt 2"},
    {date:"2021-12-19", dish:"Tisdag rätt 3"},
    {date:"2021-12-19", dish:"Tisdag rätt 4"},
    {date:"2021-13-20", dish:"Onsdag rätt 1"},
    {date:"2021-13-20", dish:"Onsdag rätt 2"},
    {date:"2021-00-21", dish:"Torsdag rätt 1"},
    {date:"2021-00-21", dish:"Torsdag rätt 2"},
    {date:"2021-10-22", dish:"Fredag rätt 1"},
    {date:"2021-10-22", dish:"Fredag rätt 2"},
]

let day = [
    "måndag","tisdag","onsdag","torsdag","fredag"
]

let articles;

function init(){
    let counter = 0;
    let dayCounter = -1;
    articles = document.getElementById("articles");
    console.log(day[1]);
    dishes.forEach(element => {
        if(counter == 0 || element.date !== dishes[counter-1].date){
            dayCounter++;
            createNewArticle(element, dayCounter);
        }else{
            createNewParagraph(element, dayCounter);
            //dayCounter++;
        }
        counter++;
    });
}
window.onload = init;

function createNewArticle(dayDish, dayCounter){
        let article = document.createElement("article");
        let header = document.createElement("h2");
        let paragraph = document.createElement("p");
        let span = document.createElement("span");
        let date = getDate(dayDish.date);
        
        article.id = "a" + dayCounter;
        articles.appendChild(article);
        span.className ="day";
        span.innerHTML = day[dayCounter];
        header.appendChild(span);
        span = document.createElement("span");
        span.className = "date";
        span.innerHTML = date;
        header.appendChild(span);

        paragraph.innerHTML = dayDish.dish;
        
        
        article=document.getElementById("a"+dayCounter);
        article.appendChild(header);
        article.appendChild(paragraph);
}

function createNewParagraph(dayDish, counter){
    let article = document.getElementById("a" + counter);
    let paragraph = document.createElement("p");
    paragraph.innerHTML = dayDish.dish;
    article.appendChild(paragraph);
}

function getDate(date){
    let words = date.split("-");
    let day=words[2];
    let month;
    let newDate;
   
    switch(words[1]){
        case "01":
            month = "jan";
            break;
        case "02":
            month = "feb";
            break;
        case "03":
            month = "mar";
            break;
        case "04":
            month = "apr";
            break;
        case "05":
            month = "maj";
            break;
        case "06":
            month = "jun";
            break;
        case "07":
            month = "jul";
            break;
        case "08":
            month = "aug";
            break; 
        case "09":
            month = "sep";
            break;   
        case "10":
            month = "okt";
            break;
        case "11":
            month = "nov";
            break;
        case "12":
            month = "dec";
            break;
        default:
            month = "ingen giltig månad";
            break;
    }
    newDate = day + " " + month;
    return newDate;
}
