let p = document.querySelector("p");
p.style.fontSize=10+"px";
let stop=false;

function size(s){
    if(s===1) p.style.fontSize*=1.1;
    else p.style.fontSize*=0.9;
}

while(!stop){
    window.addEventListener("keydown", event=>{
        if(event.key = "ArrowUp"){
            size(1);
        }else if(event.key="ArrowDown"){
            size(-1);
        }

    });
}