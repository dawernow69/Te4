let i;
let paragraph;
let section;
let text;
let data;

let myJSON = '{"name":"Tim Tuvestam","age":28}';
let myObj = JSON.parse(myJSON);

fetch('https://its.teknikum.it/~david/test.json').then(response => {
    return response.json()
  }).then(data => {
    // Work with JSON data here
    console.log(data);
    let meals=data.meals;
    let week=data.week;
    let i=0;
    console.log(week + " " + meals[0].dish);
    stycke(week);
    for(i=0;i<meals.length;i++)
      sections(meals[i],i);
    //  i++;
    //}

   // sections(meals[0]);
    //sections(meals[1]);
    //return data;
  }).catch(err => {
    // Do something for an error here
  });
 
/*function jsonObj(){
  let newObject;
  fetch('http://94.46.140.3:8080/teknikumMenu/api/menu')
    .then(response => console.log(response.text())
    .then(text => console.log(text))
      // Work with JSON data here
    //console.log(text);
    //newObj=JSON.parse(data);
    //alert("NewOject = " + newObj);
    //return (data);
    //.catch(err => );
    // Do something for an error her
  
  

  
}*/



function init(){
    
    //document.getElementById("btn").onclick = stycke;
    //jsonObj();
    
    //start();
    
   
}
window.onload = init;

function stycke(week){
    text = document.createTextNode("Vecka " + week);
    paragraph = document.createElement("p");    
    paragraph.appendChild(text);
    document.getElementById("text").appendChild(paragraph);
}

function sections(dish, index){
    section = document.createElement("section");
    section.setAttribute("id","newSection" + index);
    document.getElementById("main").appendChild(section);
    text = document.createTextNode(dish.day);
    paragraph = document.createElement("p");    
    paragraph.appendChild(text);
    document.getElementById("newSection"+index).appendChild(paragraph)
    text = document.createTextNode(dish.dish);
    paragraph = document.createElement("p");    
    paragraph.appendChild(text);
    document.getElementById("newSection"+index).appendChild(paragraph)
    text = document.createTextNode(dish.alt_dish);
    paragraph = document.createElement("p");    
    paragraph.appendChild(text);
    document.getElementById("newSection"+index).appendChild(paragraph);
}

function start(){
    for(i=0;i<2;i++){
        stycke();
    }

    sections();
}

