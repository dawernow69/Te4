import React from "react";
import ReactDOM from "react-dom";

function Headline(props){
    return <h1>{props.title}</h1>
}

function Button(props){
    return <button type="submit">{props.message}</button>;
}

function Box(props){
    return <div>
        <h1>{props.title}</h1>
        <p>{props.message}</p>
    </div>;
}

function ListItem(props){
    return <li><input type="checkbox"><label>{props.title}</label></input></li>;
}

function List(props){
    return <Headline title="Lista"/>
}

//ReactDOM.render(<Headline title = "Hello world" />,document.getElementById("root"));

ReactDOM.render(<ListItem title="Hello world" />,
document.getElementById("root"));