import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Search.css";

export default function Search() {
  let [keyword, setKeyword] = useState(null);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleWordResponse(response) {
    console.log(response);
    setResults(response.data[0]);
  }

  function handleImageResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    // Documentation : https://dictionaryapi.dev/
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleWordResponse);

    const pexelsApiKey =
      "563492ad6f91700001000001fbed14de5ada49acb625265768b42e5c";

    const pexelsApiUrl = `https://api.pexels.com/v1/search?query=n${keyword}&per_page=1`;

    const headers = { Authorization: `Bearer ${pexelsApiKey}` };

    axios
      .get(pexelsApiUrl, {
        headers: headers,
      })
      .then(handleImageResponse);
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
      <Photos photos={photos} />
    </div>
  );
}
