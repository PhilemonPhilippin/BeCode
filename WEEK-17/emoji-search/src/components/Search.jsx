import React from "react";
import "./Search.css";
import { useState } from "react";

const Search = ({sendKeywordsToParent}) => {
  const [searchText, setSearchText] = useState("");

  const handleEnterKeyPressed = (e) => {
    if (e.key === "Enter") {
      sendKeywordsToParent(searchText);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchText}
        onKeyDown={handleEnterKeyPressed}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="🔎 search..."
      />
    </div>
  );
};

export default Search;
