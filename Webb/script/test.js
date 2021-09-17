let myJSON = '{"name":"Tim Tuvestam","age":28}';
let myObj = JSON.parse(myJSON);

students = {student:[
    {"elevID":1,Firstname:"Tim",Lastname:"Tuvestam",age:28},
    {"elevID":2,Firstname:"David",Lastname:"Wernow",age:"old"}
]}
let text = document.getElementById("text");

text.innerHTML=myObj.name +" " + myObj.age;

document.getElementById("fname").innerHTML=students.student[0].Firstname;
document.getElementById("lname").innerHTML=students.student[0].Lastname;
document.getElementById("age").innerHTML=students.student[0].age;

document.getElementById("fname2").innerHTML=students.student[1].Firstname;
document.getElementById("lname2").innerHTML=students.student[1].Lastname;
document.getElementById("age2").innerHTML=students.student[1].age;