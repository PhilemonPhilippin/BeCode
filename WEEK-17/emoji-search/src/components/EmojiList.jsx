import React from "react";
import data from "../../emojis.json";
import { useState, useEffect } from "react";
import Emoji from "./Emoji";
import "./EmojiList.css";
const EmojiList = () => {
  const [emojis, setEmojis] = useState(data);

  // useEffect(() => {
  //   console.log(emojis.slice(0, 5));
  // }, []);
  return (
    <div className="emoji-list-container">
      {emojis && emojis.map((emoji) => (<Emoji emoji={emoji} key={emoji.title} />))}
    </div>
  );
};

export default EmojiList;
