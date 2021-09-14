let click;

function init(){
    click = document.getElementById("klicka");
    click.addEventListener("click",event=>{
        klicka();
        event.preventDefault();       
    });
}
window.onload = init;

function klicka(){
    console.log("hej");
}