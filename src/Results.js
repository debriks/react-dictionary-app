import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results d-flex align-items-center">
        <div className="Results__Word">
          <p>{props.results.word}</p>
        </div>
        <div className="Results__Container">
          {props.results.meanings.slice(0, 1).map(function (meaning, index) {
            return (
              <div key={index} className=" d-flex align-items-center">
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
                    <div>
                      <Phonetic phonetic={phonetic} key={index} />
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
