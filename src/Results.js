import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import Synonym from "./Synonym";
import "./Results.css";

export default function Results() {
  return (
    <div className="Results d-flex- flex-row">
      <div className="Results__Meaning">
        <Meaning />
      </div>
      <div className="Results_Extras d-flex flex-row">
        <Phonetic />
        <Synonym />
      </div>
    </div>
  );
}
