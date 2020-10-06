let form = document.querySelector("form");

form.addEventListener("submit", function(event){
    console.log(form.elements.namedItem.value);
    console.log(form.elements.class.value);
})