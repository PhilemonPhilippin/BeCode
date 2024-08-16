import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import EmojiList from "./components/EmojiList";

function App() {
  return (
    <>
      <h1>EmojiSearch</h1>
      <EmojiList />
    </>
  );
}

export default App;
