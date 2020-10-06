let p = document.querySelector("p");

function size(s){
    p.style.fontSize+=s+"px";
}


window.addEventListener("keydown", event=>{
    if(event.key = "ArrowUp"){
        size(50);
    }else if(event.key="ArrowDown"){
        size(-50);
    }

});
