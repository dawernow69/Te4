import React from "react";
import Head from "./headline.jsx";
import ListItem from "./listitem.jsx";

export default function List(props){

    return 
    <ol>
        <ListItem numbers={props.numbers}/>
    </ol>
    
}