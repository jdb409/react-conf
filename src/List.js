import React from "react";

export default function List(props) {
  const { items, title } = props;
  return (
    <div>
    <p>{title ? title : "List Title"}</p>
    <button onClick={props.handleClick}>Click me</button>
      <ul>
        {items && items.map(item => (
          <ul>name: {item.name}</ul>
        ))}
      </ul>
    </div>
  );
}
