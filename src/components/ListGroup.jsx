import React from "react";
import { useState } from "react";

function ListGroup(props) {
  const items = props.items;
  const heading = props.heading;
  const onSelectItem = props.onSelectItem;

  const [selectedIndex, setSelectedIndex] = useState(-1);

  //event handler
  const handleClick = (index, item) => {
    console.log(index, item);
  };
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              handleClick(index, item);
              onSelectItem(index, item);
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
