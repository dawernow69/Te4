let form = document.querySelector("form");
let fileElem = document.getElementById("file");
let imgElem = form.querySelector("img");
var file;
let object;

form.addEventListener("submit", event => {
    let namn= form.elements.namn.value;
    let klass = form.elements.klass.value;
    console.log(file);
    object = {
        "name":namn,
        "klass":klass,
        "filnamn":file
    };
    
    console.log(JSON.stringify(object));
    URL.revokeObjectURL(imgElem.src);
    event.preventDefault();
});

fileElem.addEventListener("change",()=>{
    if(fileElem.files.length > 0){
        file = fileElem.files[0];
        console.log("Filename " + file);
        if(file.type) console.log("Filetype: " + file.type);

        let reader = new FileReader();

        console.log(reader);
        reader.readAsDataURL(file);
        reader.addEventListener("loadend", event=>{
            console.log("File: " + reader.result);
            file = reader.result;
            const base64String = reader.result
            .replace("data:", "")
            .replace(/^.+,/, "");

            console.log("File in base64: "+base64String);
            event.preventDefault();
        });
        let url = URL.createObjectURL(file);
        console.log("URL: " + url);
        imgElem.src = url;
    }
});

