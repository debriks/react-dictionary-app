import React from "react";
import Header from "./Header";
import Search from "./Search";
import Results from "./Results";
import "./App.css";

export default function App() {
  return (
    <div className="App d-flex justify-content-center flex-column">
      <Header />
      <Search />
      <Results />
      <small>
        This project was coded by{" "}
        <a href="https://iamagarden.be/" target="_blank" rel="noreferrer">
          Deborah Robbiano
        </a>{" "}
        and is open-sourced on{" "}
        <a
          href="https://github.com/debriks/react-dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://funny-smakager-a3614b.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </small>
    </div>
  );
}
