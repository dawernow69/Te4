/*let myJSON = '{"title":"Programmering med Visual Basic","author":"Tim Tuvestam"}';
let myObj = JSON.parse(myJSON);
//let form = document.querySelector("form");
//let object;

function init(){
    getBooks();
    /*form.addEventListener("submit",event=>{
        let title = form.elements.title.value;
        let author = form.elements.author.value;
        console.log(title + "" + author);
        object = {
            "title":title,
            "author":author
        };

        event.preventDefault();
    });
}
window.onload = init;

books = {book:[
    {Author:"Tim Tuvestam",Title:"Börja med JAVA"},
    {Author:"Lars Gunther",Title:"Webbutveckling 1"}
]}

async function getBooks(){
    console.log("Fetch");
   let bookArray = [];
   let response = await fetch("https://localhost:7287/Book");
   bookArray = await response.json();
   console.log(bookArray);
   for(let i = 0;i<bookArray.length;i++){
    let str1 = "title"+(i+1);
    let str2 = "author" + (i+1);
    document.getElementById(str1).innerHTML = bookArray[i].title;
    document.getElementById(str2).innerHTML = bookArray[i].author;

   }
   
   
}

async function postBook(){
    let response = await fetch("https://localhost:7287/Book",{
        method:"POST",

        body:object
    
    });

}


document.getElementById("title").innerHTML = books.book[0].Title;
document.getElementById("author").innerHTML = books.book[0].Author;

document.getElementById("title1").innerHTML = books.book[1].Title;
document.getElementById("author1").innerHTML = books.book[1].Author;
*/

let author;
let author1;
let title;
let title1;

function init(){
    author = document.getElementById("author");
    author1 = document.getElementById("author1");
    title = document.getElementById("title");
    title1 = document.getElementById("title1");

    fetchBooks();
}

window.onload = init;

async function fetchBooks(){
    let path = "https://its.te4.nu/~david/test";
    let response = await fetch(path);

    console.log(response);

    let json = response.json();

    console.log(json);
    
    author.innerHTML = json.author;
    title.innerHTML = json.title;
}

