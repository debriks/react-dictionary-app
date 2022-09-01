import React from "react";
import "./Example.css";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="Example">
        <h3>
          {" "}
          <em>example</em>{" "}
        </h3>
        <p>{props.example}</p>
      </div>
    );
  } else {
    return null;
  }
}
