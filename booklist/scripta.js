let form;

function init(){
    form = document.querySelector("form");

    form.addEventListener("submit", event=>{
        
        addBook();
    event.preventDefault();
    });
}
window.onload = init;

async function addBook(){
    let title= form.elements.title.value;
    let author = form.elements.author.value;
        
    object = {
        "title":title,
        "author":author
    };

    console.log(object);
    let res = await postBook(object);
    console.log(res);
    if(res==201){
        console.log("OK");
        location.href="index.html";
    }else{
        console.log("Något är fel");
    }
}

async function postBook(book){
    const response = await fetch("https://localhost:7048/BookApp",{
        method: "POST",
        mode: "cors",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(book)
    });
    return response.status;
}
