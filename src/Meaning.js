import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      {" "}
      <h3>
        {" "}
        <em> {props.meaning.partOfSpeech}</em>
      </h3>
      {props.meaning.definitions.slice(0, 1).map(function (definition, index) {
        return (
          <div key={index}>
            <p> {definition.definition} </p>
            <br />
            <em>{definition.example}</em>
            <br />
            <br />
          </div>
        );
      })}{" "}
    </div>
  );
}
