let form = document.querySelector("form");
let object;

form.addEventListener("submit", event => {
    let namn= form.elements.namn.value;
    let klass = form.elements.klass.value;
    object = {
        "name":namn,
        "klass":klass
    };
    
    console.log(JSON.stringify(object));
    event.preventDefault();
});

