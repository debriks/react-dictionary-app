import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Search.css";

export default function Search() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // Documentation : https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Search d-flex flex-column">
      <div className="d-flex flex-row">
        <div className="Search__todo">
          {" "}
          <p> Type a word → </p>
        </div>
        <div className="Search__form">
          <form onSubmit={search}>
            <input
              type="search"
              //   placeholder="Anything you want"
              onChange={handleKeywordChange}
            ></input>
          </form>
        </div>
      </div>
      <Results results={results} />
    </div>
  );
}
