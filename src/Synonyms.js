import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length > 1) {
    return (
      <div className="Synonyms">
        <h3>
          {" "}
          <em>synonyms</em>{" "}
        </h3>
        {props.synonyms.map(function (synonym, index) {
          return <span key={index}>{synonym} &nbsp;</span>;
        })}
      </div>
    );
  } else {
    return null;
  }
}
