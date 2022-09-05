import React from "react";
import { useState } from "react";

export default function CreateArea(props) {
  const [note, setNote] = useState({ title: "", note: "" });
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  function handleclick(event) {
    props.onAdd(note);
    event.preventDefault();
    setNote({ title: "", note: "" });
  }
  return (
    <form>
      <div className="note input">
        <input
          onChange={handleChange}
          name="title"
          type="text"
          placeholder="Title"
          className="input-box"
          value={note.title}
        ></input>
        <textarea
          onChange={handleChange}
          name="note"
          type="text"
          placeholder="Note"
          className="input-box"
          value={note.note}
        ></textarea>
        <button onClick={handleclick} className="input-btn">
          Add
        </button>
      </div>
    </form>
  );
}
