/*let myJSON = '{"title":"Programmering med Visual Basic","author":"Tim Tuvestam"}';
let myObj = JSON.parse(myJSON);

books = {book:[
    {Author:"Tim Tuvestam",Title:"Börja med JAVA"},
    {Author:"Lars Gunther",Title:"Webbutveckling 1"}
]}

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
