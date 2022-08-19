import React from "react";
import ReactDOM from "react-dom";
import Head from "./headline.jsx";
import List from "./list.jsx";

/*function Headline(props){
    return <h1>{props.title}</h1>
}*/


function Button(props){
    return <button type="submit">{props.message}</button>;
}

function Box(props){
    return <div>
        <Head title={props.title}/>
        <List menu={props.menu}/> 
       
        
        <p>{props.message}</p>
    </div>;
}

/*function ListItem(props){
    return <li><input type="checkbox"><label>{props.title}</label></input></li>;
}

function List(props){
    return <Head title="Lista"/>
}*/

//ReactDOM.render(<Headline title = "Hello world" />,document.getElementById("root"));
const numbers =[1,2,3];
ReactDOM.render(<Box title="Hello world" message="En liten text" numbers={numbers}/>,
document.getElementById("root"));