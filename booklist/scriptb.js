let form;
let id;
let submitButtons;

function init(){
    form = document.querySelector("form");
    submitButtons = document.querySelectorAll("button");
    createForm();
    console.log(submitButtons);
    submitButtons[0].addEventListener("click", event=>{
        
        addBook(id);
        event.preventDefault();
    });
    submitButtons[1].addEventListener("click", event=>{
        console.log("Hej..");
        
        deleteBook(id);
        event.preventDefault();
    });
}
window.onload = init;

async function createForm(){
    let params = new URLSearchParams(document.location.search);
    id = params.get("id");
    console.log("Id = " + id);

    let book = await getBook(id);
    console.log("Title = " +book.title);

    let title = document.getElementById("title");
    let author = document.getElementById("author");

    title.value = book.title;
    author.value = book.author;

}

async function addBook(id){
    let title= form.elements.title.value;
    let author = form.elements.author.value;
        
    object = {
        "id":id,
        "title":title,
        "author":author
    };

    console.log(object);
    let res = await updateBook(object);
    console.log(res);
    if(res==201){
        console.log("OK");
        location.href="index.html";
    }else{
        console.log("Något är fel");
    }
}

async function updateBook(book){
    let url = "https://localhost:7048/BookApp";
    const response = await fetch(url,{
        method: "PUT",
        mode: "cors",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(book)
    });
    return response.status;
}

async function getBook(id){
    let url = "https://localhost:7048/BookApp/" + id;
    console.log(url);

    let response = await fetch(url);
    let json = response.json();
    return json;
}

async function deleteBook(id){
    console.log("Delete.." + id);
    let url = "https://localhost:7048/BookApp/" + id;
    const response = await fetch(url,{
        method: "DELETE",
        mode: "cors"
    });
    
    let res = response.status;

    if(res === 200){
        location.href="index.html";
    }

    else{
        console.log("Error" + res);
    }
}