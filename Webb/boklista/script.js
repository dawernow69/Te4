books = {book:[
    {Author:"Tim Tuvestam",Title:"Börja med JAVA"},
    {Author:"Lars Gunther",Title:"Webbutveckling 1"}
]}

fetch("http://localhost/fil.json")
    .then(response => {
        return response.json()
      })
    .then(data => {
        console.log(data);
        let author=data.author;
        let title=data.title;
        console.log(author +" " +title);
        document.getElementById("author").innerHTML = author;
        document.getElementById("title").innerHTML = title;
    });

/*document.getElementById("author").innerHTML=books.book[0].Author;
document.getElementById("title").innerHTML=books.book[0].Title;

document.getElementById("author2").innerHTML=books.book[1].Author;
document.getElementById("title2").innerHTML=books.book[1].Title;*/