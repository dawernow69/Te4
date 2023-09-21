//myJSON = '{"date":"2021-10-26", "dish":"Testrätt"}';
//myObj = JSON.parse(myJSON);

let dishes = [
    {date:"2021-10-25", dish:"Måndag rätt 1"},
    //{date:"2021-10-25", dish:"Måndag rätt 2"},
    {date:"2021-11-26", dish:"Tisdag rätt 1"},
    {date:"2021-11-26", dish:"Tisdag rätt 2"},
    {date:"2021-11-26", dish:"Tisdag rätt 3"},
    {date:"2021-12-27", dish:"Onsdag rätt 1"},
    {date:"2021-12-27", dish:"Onsdag rätt 2"},
    {date:"2021-12-28", dish:"Torsdag rätt 1"},
    {date:"2021-12-28", dish:"Torsdag rätt 2"},
    {date:"2021-01-29", dish:"Fredag rätt 1"},
    {date:"2021-01-29", dish:"Fredag rätt 2"},
]

let day = [
    "måndag","tisdag","onsdag","torsdag","fredag"
]

let articles;
/**
 */
function init(){
    let dayCounter = -1;
    let dishesCounter = 0;
    articles = document.getElementById("articles");
    dishes.forEach(element => {
        if(dishesCounter == 0 || element.date !== dishes[dishesCounter-1].date){
            dayCounter++;
            console.log(dayCounter);
            createArticle(element, dayCounter);         
        }
        else{
            newParagraph(element,dayCounter);
            
        }
        dishesCounter++;
    });
   
}
window.onload = init;
/**
 * @param  {object} object
 * @param  {number} counter
 */
function createArticle(object, counter){
    let article = document.createElement("article");
    article.id = "a" + counter;
    let header = document.createElement("h2");
    let paragraph = document.createElement("p");
    let span = document.createElement("span");
    //article.innerHTML = "Lorem";
    articles.appendChild(article);
    span.className = "day";
    span.innerHTML = day[counter];
    header.appendChild(span);
    span = document.createElement("span");
    span.className="date";
    span.innerHTML =getDate(object.date);
    header.appendChild(span);

    paragraph.innerHTML = object.dish;

    article = document.getElementById("a"+counter);
    article.appendChild(header);
    article.appendChild(paragraph);
    
}

/**
 * Description placeholder
 * @date 9/12/2023 - 3:55:31 PM
 *
 * @param {*} object
 * @param {*} counter
 */
function newParagraph(object, counter){
    let article = document.getElementById("a"+counter);
    let paragraph = document.createElement("p");
    paragraph.innerHTML = object.dish;
    article.appendChild(paragraph);
}

/**
 * Description placeholder
 * @date 9/12/2023 - 3:55:40 PM
 *
 * @param {*} date
 * @returns {string}
 */
function getDate(date){
    let splitDate = date.split("-");
    let day = splitDate[2];
    let month;
    let newDate;

    switch(splitDate[1]){
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
            month="kommer inte att hända";
            break;
        
    }
    newDate = day + " " + month;
    return newDate;
}