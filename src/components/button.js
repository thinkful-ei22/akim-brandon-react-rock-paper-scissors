import React from "react";

export default function Button(props) {
  return (
    <div>
      <button id={props.id}>{props.label}</button>
    </div>
  );
}
