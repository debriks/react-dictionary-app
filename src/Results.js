import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div className="Results__Word">
          <p>{props.results.word}</p>
        </div>
        <div className="d-flex flex-row">
          {props.results.meanings.slice(0, 1).map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
          <div className="Results__Extras">
            <div>
              {props.results.phonetics
                .slice(0, 1)
                .map(function (phonetic, index) {
                  return (
                    <div key={index}>
                      <Phonetic phonetic={phonetic} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
