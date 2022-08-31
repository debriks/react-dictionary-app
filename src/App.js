import React from "react";
import Header from "./Header";
import Search from "./Search";
import Results from "./Results";
import ImageGallery from "./ImageGallery";
import "./App.css";

export default function App() {
  return (
    <div className="App d-flex justify-content-center flex-column align-items-center">
      <Header />
      <Search />
      <Results />
      <ImageGallery />
    </div>
  );
}
