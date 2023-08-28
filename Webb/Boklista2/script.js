//let myJson = '{"author":"Tim Tuvestam", "title":"Programmering i Visual Basic"}';
//let myObject = JSON.parse(myJson);
let books; //Referens till tabellen
let title;

let Books = [];
//let author1;
//let title1;

/*let Books={book:[
    {"author":"Tim Tuvestam", "title":"Programmering i Visual Basic"},
    {"author":"Lars Gunther", "title":"Webbutveckling 1"}
]}*/

function init(){
    books = document.getElementById("books");
    /*for(element of Books.book){
        console.log(element);
        createTableRow(element);
    }*/

    getBooks();
}
window.onload = init;

async function getBooks(){
    let Books = await getBooksFetch();

    console.log(Books);

    for (element of Books){
        console.log(element);
        createTableRow(element);
    }
}

function createTableRow(el){
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = el.author;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = el.title;
    tr.appendChild(td);
    
    books.appendChild(tr);
    console.log(tr);
}

async function getBooksFetch(){
    const path = "https://its.te4.nu/~david/test";

    let response = await fetch(path);
    console.log(response);

     //Felhantering, vad händer om vi inte har några böcker att hämta?
     
    let json = response.json();
    return json;
}
