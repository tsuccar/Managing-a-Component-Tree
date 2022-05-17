import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone((prevCond) => !prevCond);
  }

  //  return  <li style={ isDone ? {textDecoration: "line-through"}  : null } onClick={handleClick}> {props.text} </li>
  // or
  return (
    <li
      style={{ textDecoration: isDone ? "line-through" : "none" }}
      onClick={handleClick}
    >
      {" "}
      {props.text}{" "}
    </li>
  );
}

export default ToDoItem;

// Howver the lession here is, how do we remove the item from
// the list back in the app.jsx if we click on it, how does this
// function interact with App.js back to it ? that would be in the next
// part lesson.
