import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header d-flex flex-row">
      <div className="Header__Title">
        <h1> Dictionary</h1>
        <small>
          A book or electronic resource that lists the words of a language
          (typically in alphabetical order) and gives their meaning, or gives
          the equivalent words in a different language, often also providing
          information about pronunciation, origin, and usage.{" "}
          <em> "I'll look up 'love' in the dictionary"</em>
        </small>
      </div>
      <div className="Header__Quote">
        {" "}
        <div className="d-flex flex-column text-center justify-content-center align-items-center">
          <p>
            "I know words. <br /> I have the best words".
          </p>
          <small>— Donald Trump</small>
        </div>
      </div>
    </div>
  );
}
