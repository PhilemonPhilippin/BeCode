import "./App.css";
import EmojiList from "./components/EmojiList";
import Search from "./components/Search";
import { useState } from "react";

function App() {
  const [keywords, setKeywords] = useState("");

  const handleSearch = (keywords) => {
    setKeywords(keywords);
  };

  return (
    <div className="app-container">
      <div className="main-container">
        <h1>😎 EmojiSearch 😎</h1>
        <Search sendKeywordsToParent={handleSearch} />
        <EmojiList keywords={keywords} />
      </div>
    </div>
  );
}

export default App;
