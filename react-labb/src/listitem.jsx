import React from "react";

export default function ListItem(props){
    const numbers = props.numbers;
  const listItems = numbers.map((numbers) =>
    <li>{numbers}</li>
  );
    return 
    
        {listItems};
    
}