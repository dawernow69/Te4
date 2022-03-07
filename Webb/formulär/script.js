let form = document.querySelector("form");
let fileElem = document.getElementById("file");
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

fileElem.addEventListener("change",()=>{
    if(fileElem.files.length > 0){
        let file = fileElem.files[0];
        console.log("Filename " + file);
        if(file.type) console.log("Filetype: " + file.type);

        let reader = new FileReader();

        console.log(reader);
        reader.readAsDataURL(file);
        reader.addEventListener("loadend", ()=>{
            console.log("File: " + reader.result);
            const base64String = reader.result
            .replace("data:", "")
            .replace(/^.+,/, "");

            console.log("File in base64: "+base64String);
        });         
    
    }
});

