/**
 * Description placeholder
 * @date 9/19/2023 - 2:04:28 PM
 *
 * @type {*}
 */
let form; //Referens till formuläret

/**
 * Description placeholder
 * @date 9/19/2023 - 2:04:27 PM
 */
function init(){
    form = document.querySelector("form");

    form.addEventListener("submit", event=>{
        addBook();
        event.preventDefault();
    })
}
window.onload = init;

/**
 * Description placeholder
 * @date 9/19/2023 - 2:04:27 PM
 *
 * @async
 * @returns {*}
 */
async function addBook(){
    let author = form.elements.author.value;
    let title = form.elements.title.value;

    json = {
        "author":author,
        "title":title
    };

    console.log(json);

    let res = await postBookFetch(json);

    console.log(res);

    //Felhantering av något slag behövs

}


/**
 * Description placeholder
 * @date 9/19/2023 - 2:04:27 PM
 *
 * @async
 * @param {object} book
 * @returns {number}
 */
async function postBookFetch(book){
    const path = "";
    const response = await fetch(path,{
        method: "POST",
        mode: "cors",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(book)
    });
    return response.status;
}