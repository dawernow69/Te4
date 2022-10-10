let myJSON = '{"title":"Programmering med Visual Basic","author":"Tim Tuvestam"}';
let myObj = JSON.parse(myJSON);

books = {book:[
    {Author:"Tim Tuvestam",Title:"Börja med JAVA"},
    {Author:"Lars Gunther",Title:"Webbutveckling 1"}
]}

document.getElementById("title").innerHTML = books.book[0].Title;
document.getElementById("author").innerHTML = books.book[0].Author;

document.getElementById("title1").innerHTML = books.book[1].Title;
document.getElementById("author1").innerHTML = books.book[1].Author;