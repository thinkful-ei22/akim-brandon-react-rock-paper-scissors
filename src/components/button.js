import React from "react";

export default function Button(props) {
  return (
    <div>
      <button onClick={props.onClick} id={props.label}>
        {props.label}
      </button>
    </div>
  );
}
