import React from "react";
import "./Emoji.css";

const Emoji = ({ emoji }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(emoji.symbol);
  };
  return (
    <div className="emoji-container" onClick={copyToClipboard}>
      <span>{emoji.title}</span> <span>{emoji.symbol}</span>
    </div>
  );
};

export default Emoji;
