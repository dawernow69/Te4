books = {book:[
    {Author:"Tim Tuvestam",Title:"Börja med JAVA"},
    {Author:"Lars Gunther",Title:"Webbutveckling 1"}
]}


document.getElementById("author").innerHTML=books.book[0].Author;
document.getElementById("title").innerHTML=books.book[0].Title;

document.getElementById("author2").innerHTML=books.book[1].Author;
document.getElementById("title2").innerHTML=books.book[1].Title;