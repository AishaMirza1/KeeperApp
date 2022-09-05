import React from "react";

function Note(props) {
  return (
    <div className="note ">
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <button className="btn-detete">DELETE</button>
    </div>
  );
}
export { Note };
