import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
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
            <div className="Definition">
              <p> {definition.definition} </p>
            </div>
            <Example example={definition.example} />
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}{" "}
    </div>
  );
}
