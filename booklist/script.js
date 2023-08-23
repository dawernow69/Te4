let table;
let tbody
/*let bookArr = [
    {"title":"Programmering 1","author":"Tim"},
    {"title":"Vem vet minst?", "author":"Håkan"}
]*/

function init(){
    tbody = document.querySelector("tbody");
    createTable();
}
window.onload = init;

async function createTable(){
    let bookArr = [];
    bookArr = await getBooks();


    console.log(bookArr);

    for(let i=0;i<bookArr.length;i++){
        appendTable(bookArr[i]);
    }

   
}

function appendTable(book){
     let tr = document.createElement("tr");
     let cell = document.createElement("td");
     let a = document.createElement("a");
     a.href = "changeBook.html?id=" + book.id;
     a.appendChild(document.createTextNode(book.title));
     cell.appendChild(a);
     tr.appendChild(cell);
     cell= document.createElement("td");
     cell.appendChild(document.createTextNode(book.author));
     tr.appendChild(cell);
     console.log(tr);
     tbody.appendChild(tr);     
     
}

async function getBooks(){
    let response = await fetch("https://localhost:7048/BookApp");

    console.log(response);

   let json = response.json();
    return json;
}

async function getBook(id){
    let url = "https://localhost:7048/BookApp/" + id;
    conslole.log(url);

    let response = await fetch(url);
    let json = response.json();
    return json;
}