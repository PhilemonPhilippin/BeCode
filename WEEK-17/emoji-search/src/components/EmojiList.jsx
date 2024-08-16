import React from "react";
import data from "../../emojis.json";
import { useState, useEffect } from "react";
import Emoji from "./Emoji";
import "./EmojiList.css";

const EmojiList = ({ keywords }) => {
  const [emojis, setEmojis] = useState(data);

  const filterByEmoji = (emoji, keywords) => {
    const jsonEmojiKeywords = emoji.keywords.split(" ");
    let emojiMatch = true;
    for (const word of keywords) {
      if (jsonEmojiKeywords.includes(word) === false) {
        emojiMatch = false;
      }
    }
    if (emojiMatch) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    if (keywords) {
      keywords = keywords.split(" ");
      const newEmojis = data.filter((emoji) => filterByEmoji(emoji, keywords));
      setEmojis(newEmojis);
    }
  }, [keywords]);

  return (
    <div className="emoji-list-container">
      {emojis &&
        emojis.map((emoji) => <Emoji emoji={emoji} key={emoji.title} />)}
    </div>
  );
};

export default EmojiList;
