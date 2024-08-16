import React from "react";
import "./Emoji.css";

const Emoji = ({emoji}) => {
  return (
    <div className="emoji-container">
      <span>{emoji.title}</span> <span>{emoji.symbol}</span>
    </div>
  );
};

export default Emoji;
